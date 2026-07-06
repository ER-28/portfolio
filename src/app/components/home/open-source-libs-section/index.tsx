import Link from "next/link";
import {SiGithub} from "@icons-pack/react-simple-icons";

import {openSourceProjects} from "@/data/openSourceProjects";
import type {GitHubRepo} from "@/types";
import {GITHUB_API} from "@/lib/constants";
import Reveal from "@/components/shared/reveal";

const OpenSourceLibsSection = async () => {
  if (openSourceProjects.length === 0) return null;

  let repos: GitHubRepo[] = [];

  try {
    const results = await Promise.all(
      openSourceProjects.map((repo) =>
        fetch(`${GITHUB_API}/repos/${repo}`).then((r) => (r.ok ? r.json() : null))
      )
    );
    repos = results.filter(Boolean) as GitHubRepo[];
  } catch {
    return null;
  }

  if (repos.length === 0) return null;

  return (
    <section aria-label="Open Source Libraries" className="border-t border-border/40">
      <div className="container">
        <div className="max-w-5xl mx-auto px-4 sm:px-7 py-16 md:py-24">
          <Reveal direction="up">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1 h-6 bg-accent rounded-full" />
              <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase font-medium">Libraries</p>
            </div>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-primary">
              Open Source Libraries
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {repos.map((repo) => (
              <Reveal key={repo.full_name} direction="up">
                <Link
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-5 rounded-xl bg-muted/20 border border-border/40 hover:border-accent/30 hover:bg-muted/30 transition-all duration-300 h-full"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <SiGithub width={24} height={24} className="text-accent shrink-0" />
                    <h5 className="text-primary group-hover:text-accent transition-colors duration-300">{repo.name}</h5>
                  </div>
                  {repo.description && (
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{repo.description}</p>
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
                    {repo.homepage && (
                      <span className="text-[11px] text-accent bg-accent/10 py-1 px-2.5 rounded">
                        Docs
                      </span>
                    )}
                    {repo.topics && repo.topics.length > 0 && repo.topics.slice(0, 2).map((topic) => (
                      <span key={topic} className="text-[11px] text-accent bg-accent/10 py-1 px-2.5 rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceLibsSection;
