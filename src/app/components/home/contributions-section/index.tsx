import Link from "next/link";
import {SiGithub} from "@icons-pack/react-simple-icons";

import {contributingRepos} from "@/data/contributing";
import type {GitHubRepo, GitHubPr} from "@/types";
import {GITHUB_API} from "@/lib/constants";
import Reveal from "@/components/shared/reveal";

interface RepoWithPrs {
  repo: GitHubRepo
  prs: GitHubPr[]
}

const ContributionsSection = async () => {
  if (contributingRepos.length === 0) return null;

  let items: RepoWithPrs[] = [];

  try {
    const repoResults = await Promise.all(
      contributingRepos.map((repo) =>
        fetch(`${GITHUB_API}/repos/${repo}`).then((r) => (r.ok ? r.json() : null))
      )
    );
    const repos = repoResults.filter(Boolean) as GitHubRepo[];

    const repoFilter = contributingRepos.map((r) => `repo:${r}`).join("+");
    const searchRes = await fetch(
      `${GITHUB_API}/search/issues?q=author:ER-28+type:pr+${repoFilter}&sort=created&order=desc&per_page=50`
    );
    const searchData = searchRes.ok ? await searchRes.json() : null;
    const prs = (searchData?.items ?? []) as GitHubPr[];

    items = repos.map((repo) => ({
      repo,
      prs: prs.filter((pr) => pr.repository_url === `${GITHUB_API}/repos/${repo.full_name}`),
    }));
  } catch {
    return null;
  }

  if (items.length === 0) return null;

  return (
    <section aria-label="Contributions" className="border-t border-border/40">
      <div className="container">
        <div className="max-w-5xl mx-auto px-4 sm:px-7 py-16 md:py-24">
          <Reveal direction="up">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1 h-6 bg-accent rounded-full" />
              <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase font-medium">Contributions</p>
            </div>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-primary">
              Open Source Contributions
            </h2>
          </Reveal>
          <div className="flex flex-col gap-6">
            {items.map(({repo, prs}) => (
              <Reveal key={repo.full_name} direction="up">
                <div className="rounded-xl bg-muted/20 border border-border/40 overflow-hidden">
                  <Link
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-5 border-b border-border/40 hover:bg-muted/30 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <SiGithub width={24} height={24} className="text-accent shrink-0" />
                      <h5 className="text-primary group-hover:text-accent transition-colors duration-300">{repo.name}</h5>
                    </div>
                    {repo.description && (
                      <p className="text-sm text-muted-foreground mb-3">{repo.description}</p>
                    )}
                    <div className="flex flex-wrap items-center gap-2">
                      {repo.language && (
                        <span className="text-[11px] text-muted-foreground bg-muted/50 py-1 px-2.5 rounded border border-border/30">
                          {repo.language}
                        </span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span className="text-[11px] text-muted-foreground bg-muted/50 py-1 px-2.5 rounded border border-border/30 flex items-center gap-1">
                          ★ {repo.stargazers_count}
                        </span>
                      )}
                      {repo.topics && repo.topics.length > 0 && repo.topics.slice(0, 4).map((topic) => (
                        <span key={topic} className="text-[11px] text-accent bg-accent/10 py-1 px-2.5 rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </Link>
                  {prs.length > 0 && (
                    <div className="p-5">
                      <p className="text-xs text-muted-foreground font-mono mb-3 tracking-wider uppercase">
                        Pull Requests ({prs.length})
                      </p>
                      <div className="flex flex-col gap-1.5">
                        {prs.map((pr) => (
                          <Link
                            key={pr.id}
                            href={pr.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-accent py-1.5 px-2 -mx-2 rounded-lg hover:bg-muted/30 transition-all duration-200"
                          >
                            <span
                              className={`w-2 h-2 rounded-full shrink-0 ${
                                pr.state === "open" ? "bg-emerald-400" : "bg-muted-foreground"
                              }`}
                            />
                            <span className="truncate">{pr.title}</span>
                            <span className="text-[10px] text-muted-foreground shrink-0 font-mono ml-auto">#{pr.number}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributionsSection;
