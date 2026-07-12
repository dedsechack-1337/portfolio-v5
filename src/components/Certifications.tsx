import { FileCheck2, Download } from "lucide-react";
import { certifications } from "../data";
import { withBase } from "../lib/url";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <section id="certifications" className="bg-(--color-bg-raised) border-y border-(--color-line)">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-24 md:py-32">
        <SectionHeading
          command="verify --all-certs --show-status"
          title="Certifications & licences"
          subtitle="Verified credentials across offensive security, networking, and AI. Where available, the original certificate is one click away."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={(i % 6) * 50}>
              <div className="panel panel-hover p-5 h-full flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <FileCheck2 className="w-5 h-5 text-(--color-green-dim) shrink-0 mt-0.5" />
                  <h3 className="font-semibold text-(--color-ink) text-sm leading-snug">{c.name}</h3>
                </div>
                <p className="text-xs text-(--color-ink-muted) mb-1">{c.issuer}</p>
                <p className="text-[11px] font-mono text-(--color-ink-faint) mb-4">{c.meta}</p>

                {c.files.length > 0 && (
                  <div className="mt-auto flex flex-wrap gap-2 pt-3 border-t border-(--color-line)">
                    {c.files.map((f, idx) => (
                      <a
                        key={f}
                        href={withBase(f)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] text-(--color-green-dim) hover:text-(--color-green) transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        {c.files.length > 1 ? `view ${idx === 0 ? "certificate" : "gradesheet"}` : "view certificate"}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
