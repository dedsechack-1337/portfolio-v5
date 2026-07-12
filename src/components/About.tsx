import { Terminal } from "lucide-react";
import { profile, otherHighlights, languages } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-5 md:px-8 py-24 md:py-32">
      <SectionHeading command="cat profile.txt" title="Whoami" />

      <div className="grid md:grid-cols-[1.4fr_1fr] gap-10">
        <Reveal>
          <div className="panel p-6 md:p-8 relative">
            <Terminal className="w-5 h-5 text-(--color-green-dim) mb-4" />
            <p className="text-(--color-ink) leading-relaxed text-[15px] md:text-base">
              {profile.summary}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="flex flex-col gap-6">
          <div className="panel p-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-(--color-green-dim) mb-4">
              Notable log entries
            </h3>
            <ul className="space-y-3">
              {otherHighlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-(--color-ink-muted) leading-relaxed">
                  <span className="text-(--color-green) font-mono mt-0.5">›</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="panel p-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-(--color-green-dim) mb-4">
              Languages
            </h3>
            <div className="space-y-2.5">
              {languages.map((l) => (
                <div key={l.name} className="flex items-center justify-between text-sm">
                  <span className="text-(--color-ink)">{l.name}</span>
                  <span className="font-mono text-xs text-(--color-ink-faint)">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
