"use client";

import Link from "next/link";
import {SiGithub} from "@icons-pack/react-simple-icons";
import {useEffect, useState} from "react";

import SectionHeader from "@/components/shared/section-header";
import {contributingRepos} from "@/data/contributing";
import type {GitHubPr} from "@/types";
import {GITHUB_API} from "@/lib/constants";

type GroupedPrs = Record<string, GitHubPr[]>;

const Contributions = () => {
  const [grouped, setGrouped] = useState<GroupedPrs>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (contributingRepos.length === 0) {
      setLoading(false);
      return;
    }

    const repoFilter = contributingRepos.map((r) => `repo:${r}`).join("+");
    fetch(
      `${GITHUB_API}/search/issues?q=author:ER-28+type:pr+${repoFilter}&sort=created&order=desc&per_page=50`
    )
      .then((res) => res.ok ? res.json() : null)
      .then((data) => {
        if (!data?.items) return;
        const items = data.items as GitHubPr[];
        const result: GroupedPrs = {};
        for (const pr of items) {
          const repoName = pr.repository_url.replace(`${GITHUB_API}/repos/`, "");
          if (contributingRepos.includes(repoName)) {
            if (!result[repoName]) result[repoName] = [];
            result[repoName].push(pr);
          }
        }
        setGrouped(result);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const entries = Object.entries(grouped);

  if (!loading && entries.length === 0) return null;

  return (
    <section aria-label="Open Source Contributions">
      <div className="container">
        <div className="border-x border-border">
          <SectionHeader title="Open Source Contributions" />
          <div className="border-t border-border">
            <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16">
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <span className="text-sm text-muted-foreground">Loading contributions...</span>
                </div>
              ) : (
                entries.map(([repo, prs]) => {
                  const repoName = repo.split("/").pop() ?? repo;
                  return (
                    <div
                      key={repo}
                      className="flex flex-col gap-5 border-dashed border-b border-border last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0"
                    >
                      <div className="flex items-center gap-3">
                        <SiGithub width={28} height={28} className="text-primary" />
                        <Link
                          href={`https://github.com/${repo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2"
                        >
                          <h5>{repoName}</h5>
                        </Link>
                      </div>
                      <div className="flex flex-col gap-2">
                        {prs.map((pr) => (
                          <Link
                            key={pr.id}
                            href={pr.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 text-primary hover:underline"
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                pr.state === "open" ? "bg-green-500" : "bg-muted-foreground"
                              }`}
                            />
                            <span className="text-sm sm:text-base">{pr.title}</span>
                            <span className="text-xs text-muted-foreground shrink-0">#{pr.number}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contributions;
