"use client";

import Link from "next/link";
import {SiGithub} from "@icons-pack/react-simple-icons";
import {useEffect, useState} from "react";

import {openSourceProjects} from "@/data/openSourceProjects";
import {contributingRepos} from "@/data/contributing";
import type {GitHubRepo, GitHubPr} from "@/types";
import {GITHUB_API} from "@/lib/constants";
import Reveal from "@/components/shared/reveal";

const OpenSourceSection = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [prs, setPrs] = useState<GitHubPr[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (openSourceProjects.length === 0 && contributingRepos.length === 0) {
      setLoading(false);
      return;
    }

    Promise.all([
      ...openSourceProjects.map((repo) =>
        fetch(`${GITHUB_API}/repos/${repo}`).then((r) => (r.ok ? r.json() : null))
      ),
    ])
      .then((results) => setRepos(results.filter(Boolean) as GitHubRepo[]))
      .catch(() => {});

    if (contributingRepos.length > 0) {
      const repoFilter = contributingRepos.map((r) => `repo:${r}`).join("+");
      fetch(
        `${GITHUB_API}/search/issues?q=author:ER-28+type:pr+${repoFilter}&sort=created&order=desc&per_page=20`
      )
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (data?.items) setPrs(data.items as GitHubPr[]);
        })
        .catch(() => {})
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  if (!loading && repos.length === 0 && prs.length === 0) return null;

  return (
    <section aria-label="Open Source" className="border-t border-border/40">
      <div className="container">
        <div className="max-w-5xl mx-auto px-4 sm:px-7 py-16 md:py-24">
          <Reveal direction="up">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1 h-6 bg-accent rounded-full" />
              <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase font-medium">Open Source</p>
            </div>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-primary">
              Contributions
            </h2>
          </Reveal>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <span className="text-sm text-muted-foreground">Loading...</span>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
              {repos.map((repo) => (
                <Reveal key={repo.full_name} direction="up">
                  <Link
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-5 rounded-xl bg-muted/20 border border-border/40 hover:border-accent/30 transition-all duration-300 h-full"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <SiGithub width={22} height={22} className="text-accent shrink-0" />
                      <h5 className="text-primary group-hover:text-accent transition-colors duration-300">{repo.name}</h5>
                    </div>
                    {repo.description && (
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{repo.description}</p>
                    )}
                    <div className="flex flex-wrap items-center gap-2">
                      {repo.language && (
                        <span className="text-[10px] text-muted-foreground bg-muted/50 py-1 px-2 rounded">{repo.language}</span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span className="text-[10px] text-muted-foreground bg-muted/50 py-1 px-2 rounded flex items-center gap-1">
                          ★ {repo.stargazers_count}
                        </span>
                      )}
                    </div>
                  </Link>
                </Reveal>
              ))}
              {prs.length > 0 && (
                <Reveal direction="up">
                  <div className="p-5 rounded-xl bg-muted/20 border border-border/40 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <SiGithub width={22} height={22} className="text-accent shrink-0" />
                      <h5 className="text-primary font-semibold">Pull Requests</h5>
                    </div>
                    <div className="flex flex-col gap-2">
                      {prs.slice(0, 5).map((pr) => (
                        <Link
                          key={pr.id}
                          href={pr.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${pr.state === "open" ? "bg-emerald-400" : "bg-muted-foreground"}`} />
                          <span className="truncate">{pr.title}</span>
                          <span className="text-[10px] text-muted-foreground shrink-0 font-mono">#{pr.number}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
