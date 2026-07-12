import { useState } from "react";
import { Trophy, ChevronDown, ImageIcon } from "lucide-react";
import { achievements, collegeActivities } from "../data";
import { withBase } from "../lib/url";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Achievements() {
  const [open, setOpen] = useState(false);

  return (
    <section id="achievements" className="max-w-6xl mx-auto px-5 md:px-8 py-24 md:py-32">
      <SectionHeading
        command="grep -i '1st_prize\\|winner' ./achievements"
        title="Competitions & achievements"
      />

      <div className="grid sm:grid-cols-2 gap-5">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 60}>
            <div className="panel panel-hover p-6 h-full">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-start gap-2.5">
                  <Trophy className="w-5 h-5 text-(--color-amber) shrink-0 mt-0.5" />
                  <h3 className="font-semibold text-(--color-ink) leading-snug">{a.title}</h3>
                </div>
              </div>
              <p className="text-xs font-mono text-(--color-green-dim) mb-1">{a.date}</p>
              <p className="text-sm text-(--color-ink-muted) mb-1">{a.org}</p>
              <p className="text-sm text-(--color-ink-muted) leading-relaxed mt-2">{a.detail}</p>
              {a.file && (
                <a
                  href={withBase(a.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] text-(--color-green-dim) hover:text-(--color-green) transition-colors pt-3 border-t border-(--color-line) w-full"
                >
                  <ImageIcon className="w-3.5 h-3.5" /> view certificate
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-6">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full panel p-5 flex items-center justify-between text-left hover:border-(--color-green-dim) transition-colors"
          aria-expanded={open}
        >
          <span className="font-mono text-sm text-(--color-ink)">
            University events & workshops log ({collegeActivities.length} entries)
          </span>
          <ChevronDown
            className={`w-5 h-5 text-(--color-green-dim) transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <div className="mt-4 panel divide-y divide-(--color-line)">
            {collegeActivities.map((c) => (
              <div key={c.title + c.period} className="p-4 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-sm text-(--color-ink) font-medium">{c.title}</p>
                  <p className="text-xs text-(--color-ink-muted)">{c.detail}</p>
                </div>
                <span className="font-mono text-[11px] text-(--color-ink-faint) shrink-0">{c.period}</span>
              </div>
            ))}
          </div>
        )}
      </Reveal>
    </section>
  );
}
