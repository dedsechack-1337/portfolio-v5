import { skillGroups } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="bg-(--color-bg-raised) border-y border-(--color-line)">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-24 md:py-32">
        <SectionHeading
          command="grep -r 'competency' ./skillset"
          title="Skill matrix"
          subtitle="Nine domains, mapped across the full BSc (Hons) Advanced Networking & Cyber Security syllabus — from offensive tooling to embedded hardware."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 60}>
              <div className="panel panel-hover p-5 md:p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--color-green)" />
                  <h3 className="font-mono text-sm font-semibold text-(--color-ink) tracking-wide">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
