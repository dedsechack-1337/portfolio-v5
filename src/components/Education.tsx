import { useState } from "react";
import { ChevronDown, GraduationCap } from "lucide-react";
import { education, syllabus } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Education() {
  const [open, setOpen] = useState(false);

  return (
    <section id="education" className="max-w-6xl mx-auto px-5 md:px-8 py-24 md:py-32">
      <SectionHeading command="cat education.yml" title="Education" />

      <div className="grid gap-5">
        {education.map((ed, i) => (
          <Reveal key={ed.school + ed.period} delay={i * 70}>
            <div className="panel p-6 md:p-7">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-6 h-6 text-(--color-green-dim) shrink-0 mt-1" />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                    <span className="font-mono text-xs text-(--color-green-dim)">{ed.period}</span>
                  </div>
                  <h3 className="font-semibold text-(--color-ink) text-lg">{ed.degree}</h3>
                  <p className="text-sm text-(--color-ink-muted)">{ed.school}</p>
                  <p className="text-xs text-(--color-ink-faint) font-mono mt-1">{ed.meta}</p>
                  {ed.detail && (
                    <p className="text-sm text-(--color-green) font-mono mt-2">{ed.detail}</p>
                  )}
                  {ed.specialisations.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {ed.specialisations.map((s) => (
                        <span key={s} className="chip">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
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
            View full 8-semester syllabus map
          </span>
          <ChevronDown
            className={`w-5 h-5 text-(--color-green-dim) transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            {syllabus.map((s) => (
              <div key={s.sem} className="panel p-5">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-mono text-xs text-(--color-green)">{s.sem}</span>
                  <span className="font-mono text-xs text-(--color-ink-faint)">— {s.title}</span>
                </div>
                <p className="text-sm text-(--color-ink-muted) leading-relaxed">{s.items}</p>
              </div>
            ))}
          </div>
        )}
      </Reveal>
    </section>
  );
}
