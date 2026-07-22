import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { projects } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const severityStyles: Record<string, string> = {
  critical: "text-(--color-red-alert) border-(--color-red-alert)/40 bg-(--color-red-alert)/5",
  high: "text-(--color-amber) border-(--color-amber)/40 bg-(--color-amber)/5",
  medium: "text-(--color-green) border-(--color-green-dim)/40 bg-(--color-green)/5",
  low: "text-(--color-ink-muted) border-(--color-line-bright) bg-transparent",
};

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-5 md:px-8 py-24 md:py-32">
      <SectionHeading
        command="ls -la ~/projects --sort=impact"
        title="Featured projects"
        subtitle="Open-source security tooling — AI-driven detection, SOC automation, and hardware exploitation. All hosted at github.com/dedsechack-1337."
      />

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 60}>
            <a
              href="https://github.com/dedsechack-1337"
              target="_blank"
              rel="noopener noreferrer"
              className="panel panel-hover p-6 h-full flex flex-col group"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-mono text-lg font-bold text-(--color-ink) group-hover:text-(--color-green) transition-colors">
                  {p.name}
                </h3>
                <span
                  className={`shrink-0 font-mono text-[10px] uppercase tracking-wide px-2 py-1 rounded border ${severityStyles[p.severity]}`}
                >
                  {p.severity}
                </span>
              </div>

              <p className="text-sm text-(--color-ink-muted) leading-relaxed mb-3">{p.description}</p>
              <p className="text-xs text-(--color-ink-faint) leading-relaxed mb-5">{p.detail}</p>

              <div className="mt-auto flex flex-wrap gap-2 items-center justify-between pt-4 border-t border-(--color-line)">
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
                <ExternalLink className="w-4 h-4 text-(--color-ink-faint) group-hover:text-(--color-green) transition-colors shrink-0" />
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-8 text-center">
        <a
          href="https://github.com/dedsechack-1337"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm text-(--color-green-dim) hover:text-(--color-green) transition-colors"
        >
          <GithubIcon className="w-4 h-4" /> view all 45+ repositories →
        </a>
      </Reveal>
    </section>
  );
}
