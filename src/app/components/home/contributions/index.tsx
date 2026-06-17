import Link from "next/link";
import {SiGithub} from "@icons-pack/react-simple-icons";

import SectionHeader from "@/components/shared/section-header";
import {contributingRepos} from "@/data/contributing";
import {fetchPrsByAuthor} from "@/lib/github";

const Contributions = async () => {
  const grouped = await fetchPrsByAuthor("ER-28", contributingRepos);
  const entries = Object.entries(grouped);

  if (entries.length === 0) return null;

  return (
    <section>
      <div className="container">
        <div className="border-x border-border">
          <SectionHeader title="Open Source Contributions" />
          <div className="border-t border-border">
            <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16">
              {entries.map(([repo, prs]) => {
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
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contributions;
