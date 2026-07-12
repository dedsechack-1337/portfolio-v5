import { experience } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="bg-(--color-bg-raised) border-y border-(--color-line)">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-24 md:py-32">
        <SectionHeading
          command="tail -f /var/log/experience.log"
          title="Experience"
        />

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-(--color-line-bright)" />

          <div className="space-y-10">
            {experience.map((e, i) => (
              <Reveal key={e.org + e.role} delay={i * 80} className="relative">
                <span className="absolute -left-8 md:-left-10 top-1.5 w-4 h-4 rounded-full bg-(--color-bg) border-2 border-(--color-green) flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--color-green)" />
                </span>

                <div className="panel p-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                    <span className="font-mono text-xs text-(--color-green-dim)">{e.period}</span>
                    <span className="text-(--color-ink-faint)">·</span>
                    <span className="font-mono text-xs text-(--color-ink-faint)">{e.tag}</span>
                  </div>
                  <h3 className="font-semibold text-(--color-ink) text-lg">{e.role}</h3>
                  <p className="text-sm text-(--color-ink-muted) mb-3">{e.org}</p>
                  <ul className="space-y-2">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex gap-2 text-sm text-(--color-ink-muted) leading-relaxed">
                        <span className="text-(--color-green) mt-0.5">›</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
