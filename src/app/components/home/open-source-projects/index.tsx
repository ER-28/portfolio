"use client";

import Link from "next/link";
import {SiGithub} from "@icons-pack/react-simple-icons";
import {useEffect, useState} from "react";

import SectionHeader from "@/components/shared/section-header";
import {openSourceProjects} from "@/data/openSourceProjects";
import type {GitHubRepo} from "@/types";
import {GITHUB_API} from "@/lib/constants";
import Reveal from "@/components/shared/reveal";
import Stagger from "@/components/shared/stagger";

const OpenSourceProjects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (openSourceProjects.length === 0) {
      setLoading(false);
      return;
    }

    Promise.all(
      openSourceProjects.map((repo) =>
        fetch(`${GITHUB_API}/repos/${repo}`)
          .then((res) => (res.ok ? res.json() : null))
      )
    )
      .then((results) => setRepos(results.filter(Boolean) as GitHubRepo[]))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (!loading && repos.length === 0) return null;

  return (
    <section aria-label="Open Source Projects">
      <div className="container">
        <Reveal direction="up">
          <SectionHeader title="Open Source Projects" />
        </Reveal>
        <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Reveal direction="fade">
                  <span className="text-sm text-muted-foreground">Loading projects...</span>
                </Reveal>
              </div>
            ) : (
              <Stagger staggerDelay={100} direction="up">
                {repos.map((repo) => (
                  <Reveal key={repo.full_name} direction="up">
                    <div className="flex flex-col gap-4 border-b border-border/40 last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0">
                      <div className="flex items-center gap-3">
                        <SiGithub width={28} height={28} className="text-accent" />
                        <Link
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2"
                        >
                          <h5 className="group-hover:text-accent transition-colors duration-300">{repo.name}</h5>
                        </Link>
                      </div>
                      {repo.description && (
                        <p className="text-base font-normal text-muted-foreground">
                          {repo.description}
                        </p>
                      )}
                      <div className="flex flex-wrap items-center gap-3">
                        {repo.language && (
                          <span className="text-xs text-muted-foreground border border-border/60 rounded-lg py-1 px-2.5">
                            {repo.language}
                          </span>
                        )}
                        {repo.stargazers_count > 0 && (
                          <span className="text-xs text-muted-foreground border border-border/60 rounded-lg py-1 px-2.5 flex items-center gap-1">
                            ★ {repo.stargazers_count}
                          </span>
                        )}
                        {repo.homepage && (
                          <Link
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-accent hover:text-accent/80 border border-border/60 rounded-lg py-1 px-2.5 transition-colors duration-200"
                          >
                            Website
                          </Link>
                        )}
                      </div>
                      {repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {repo.topics.map((topic) => (
                            <span
                              key={topic}
                              className="text-xs bg-accent/10 text-accent rounded-full py-0.5 px-2.5"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Reveal>
                ))}
              </Stagger>
            )}
          </div>
      </div>
    </section>
  );
};

export default OpenSourceProjects;
