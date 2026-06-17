"use client";

import Link from "next/link";
import {SiGithub} from "@icons-pack/react-simple-icons";
import {useEffect, useState} from "react";

import SectionHeader from "@/components/shared/section-header";
import {openSourceProjects} from "@/data/openSourceProjects";
import type {GitHubRepo} from "@/types";
import {GITHUB_API} from "@/lib/constants";

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
        <div className="border-x border-border">
          <SectionHeader title="Open Source Projects" />
          <div className="border-t border-border">
            <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16">
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <span className="text-sm text-muted-foreground">Loading projects...</span>
                </div>
              ) : (
                repos.map((repo) => (
                  <div
                    key={repo.full_name}
                    className="flex flex-col gap-4 border-dashed border-b border-border last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0"
                  >
                    <div className="flex items-center gap-3">
                      <SiGithub width={28} height={28} className="text-primary" />
                      <Link
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2"
                      >
                        <h5>{repo.name}</h5>
                      </Link>
                    </div>
                    {repo.description && (
                      <p className="text-base font-normal text-muted-foreground">
                        {repo.description}
                      </p>
                    )}
                    <div className="flex flex-wrap items-center gap-3">
                      {repo.language && (
                        <span className="text-xs text-muted-foreground border border-border rounded-lg py-1 px-2.5">
                          {repo.language}
                        </span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span className="text-xs text-muted-foreground border border-border rounded-lg py-1 px-2.5 flex items-center gap-1">
                          ★ {repo.stargazers_count}
                        </span>
                      )}
                      {repo.homepage && (
                        <Link
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:underline border border-border rounded-lg py-1 px-2.5"
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
                            className="text-xs bg-primary/5 text-primary rounded-full py-0.5 px-2.5"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceProjects;
