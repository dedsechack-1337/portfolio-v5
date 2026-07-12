import { Guitar, AudioWaveform, Cpu } from "lucide-react";
import { softSkills, interests } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const iconMap: Record<string, typeof Guitar> = {
  guitar: Guitar,
  waveform: AudioWaveform,
  cpu: Cpu,
};

export default function Interests() {
  return (
    <section className="bg-(--color-bg-raised) border-y border-(--color-line)">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-24 md:py-32">
        <SectionHeading command="cat ~/interests.md" title="Beyond the terminal" />

        <div className="grid md:grid-cols-[1fr_1fr] gap-10">
          <Reveal>
            <div className="flex flex-wrap gap-2.5">
              {softSkills.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4">
            {interests.map((it, i) => {
              const Icon = iconMap[it.icon];
              return (
                <Reveal key={it.title} delay={i * 70}>
                  <div className="panel p-5 flex items-start gap-3">
                    <Icon className="w-5 h-5 text-(--color-green-dim) shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-(--color-ink) text-sm">{it.title}</h3>
                      <p className="text-sm text-(--color-ink-muted) mt-1 leading-relaxed">{it.detail}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
