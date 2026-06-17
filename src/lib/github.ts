import type {GitHubPr, GitHubRepo} from "@/types";

const GITHUB_API = "https://api.github.com";

export async function fetchRepos(repos: string[]): Promise<GitHubRepo[]> {
  try {
    if (repos.length === 0) return [];

    const results = await Promise.all(
      repos.map((repo) =>
        fetch(`${GITHUB_API}/repos/${repo}`, {
          next: {revalidate: 3600},
        }).then((res) => (res.ok ? res.json() : null))
      )
    );
    return results.filter(Boolean) as GitHubRepo[];
  } catch {
    return [];
  }
}

export async function fetchPrsByAuthor(
  author: string,
  repos: string[]
): Promise<Record<string, GitHubPr[]>> {
  try {
    if (repos.length === 0) return {};

    const repoFilter = repos.map((r) => `repo:${r}`).join("+");
    const res = await fetch(
      `${GITHUB_API}/search/issues?q=author:${author}+type:pr+${repoFilter}&sort=created&order=desc&per_page=50`,
      {next: {revalidate: 3600}}
    );
    if (!res.ok) return {};

    const data = await res.json();
    const items = (data.items || []) as GitHubPr[];

    const grouped: Record<string, GitHubPr[]> = {};
    for (const pr of items) {
      const repoName = pr.repository_url.replace(`${GITHUB_API}/repos/`, "");
      if (repos.includes(repoName)) {
        if (!grouped[repoName]) grouped[repoName] = [];
        grouped[repoName].push(pr);
      }
    }
    return grouped;
  } catch {
    return {};
  }
}
