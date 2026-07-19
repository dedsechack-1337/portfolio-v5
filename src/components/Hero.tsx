import { useEffect, useRef, useState } from "react";
import { ArrowDown, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile, stats } from "../data";
import { withBase } from "../lib/url";

const BOOT_LINES = [
  { prompt: "whoami", output: "amit_roy // cybersecurity_engineer" },
  {
    prompt: "cat clearance.dat",
    output: "CEH-CERTIFIED · CCNA · 1ST-PRIZE-CTF · STATUS: ACTIVE",
  },
  {
    prompt: "./load_profile --role=all",
    output: "pentester · reverse-engineer · iot_security · ai_security",
  },
];

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<"prompt" | "output" | "done">("prompt");
  const [showRest, setShowRest] = useState(false);
  const reduceMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (reduceMotion.current) {
      setPhase("done");
      setShowRest(true);
      return;
    }

    if (lineIndex >= BOOT_LINES.length) {
      const t = setTimeout(() => setShowRest(true), 300);
      return () => clearTimeout(t);
    }

    const current = BOOT_LINES[lineIndex];
    const target = phase === "prompt" ? current.prompt : current.output;

    if (charIndex < target.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), phase === "prompt" ? 32 : 14);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      if (phase === "prompt") {
        setPhase("output");
        setCharIndex(0);
      } else {
        setLineIndex((i) => i + 1);
        setPhase("prompt");
        setCharIndex(0);
      }
    }, phase === "prompt" ? 150 : 380);
    return () => clearTimeout(t);
  }, [charIndex, phase, lineIndex]);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-grid bg-noise-fade"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-(--color-green)/[0.05] blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 w-full grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          {/* terminal boot log */}
          <div className="panel relative overflow-hidden mb-8 max-w-xl">
            <div className="scanline absolute inset-0" />
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-(--color-line)">
              <span className="w-2.5 h-2.5 rounded-full bg-(--color-red-alert)/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-(--color-amber)/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-(--color-green-dim)" />
              <span className="ml-3 font-mono text-[11px] text-(--color-ink-faint)">
                session — /dev/tty1
              </span>
            </div>
            <div className="p-4 md:p-5 font-mono text-[12px] md:text-[13px] leading-relaxed min-h-[132px]">
              {BOOT_LINES.slice(0, lineIndex).map((l, i) => (
                <div key={i} className="mb-1.5">
                  <span className="text-(--color-ink-faint)">amit@dedsec:~$ </span>
                  <span className="text-(--color-ink)">{l.prompt}</span>
                  <div className="text-(--color-green) pl-0">{l.output}</div>
                </div>
              ))}
              {lineIndex < BOOT_LINES.length && (
                <div>
                  <span className="text-(--color-ink-faint)">amit@dedsec:~$ </span>
                  {phase === "prompt" ? (
                    <span className="text-(--color-ink)">
                      {BOOT_LINES[lineIndex].prompt.slice(0, charIndex)}
                    </span>
                  ) : (
                    <span className="text-(--color-ink)">{BOOT_LINES[lineIndex].prompt}</span>
                  )}
                  {phase === "output" && (
                    <div className="text-(--color-green)">
                      {BOOT_LINES[lineIndex].output.slice(0, charIndex)}
                      <span className="terminal-caret" />
                    </div>
                  )}
                  {phase === "prompt" && <span className="terminal-caret" />}
                </div>
              )}
            </div>
          </div>

          <div className={showRest ? "reveal" : "opacity-0"}>
            <p className="font-mono text-xs tracking-[0.2em] text-(--color-green-dim) uppercase mb-3">
              {profile.location}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-(--color-ink) text-glow font-mono">
              {profile.name}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-(--color-ink-muted) max-w-xl">
              {profile.roles.join(" · ")}
            </p>
            <p className="mt-5 max-w-xl text-(--color-ink-muted) leading-relaxed text-sm md:text-base">
              {profile.summary.split(".")[0]}. Builder of open-source security tooling. First-Prize CTF winner.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-5 py-3 rounded-md bg-(--color-green) text-(--color-bg) font-semibold text-sm hover:bg-(--color-green-dim) transition-colors"
              >
                View projects
              </a>
              <a
                href={withBase("/assets/Amit_Roy_Resume.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-md border border-(--color-line-bright) text-(--color-ink) font-semibold text-sm hover:border-(--color-green-dim) hover:text-(--color-green) transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Download resume
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-md border border-(--color-line-bright) text-(--color-ink) hover:border-(--color-green-dim) hover:text-(--color-green) transition-colors flex items-center gap-2 text-sm"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-md border border-(--color-line-bright) text-(--color-ink) hover:border-(--color-green-dim) hover:text-(--color-green) transition-colors flex items-center gap-2 text-sm"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
              {stats.map((s) => (
                <div key={s.label} className="panel px-3 py-3">
                  <dt className="font-mono text-[10px] uppercase tracking-wide text-(--color-ink-faint)">
                    {s.label}
                  </dt>
                  <dd className="font-mono text-lg font-bold text-(--color-green) mt-1">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* biometric scan photo card */}
        <div className={`justify-self-center ${showRest ? "reveal" : "opacity-0"}`} style={{ animationDelay: "150ms" }}>
          <div className="relative w-[240px] sm:w-[280px] md:w-[320px]">
            <div className="corner-brackets panel relative overflow-hidden">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={withBase("/assets/profile.jpg")}
                  alt="Portrait of Amit Roy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-0 right-0 h-16 bg-gradient-to-b from-(--color-green)/25 to-transparent scan-sweep pointer-events-none" />
              </div>
              <div className="p-3 border-t border-(--color-line) font-mono">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-(--color-ink-faint)">CLEARANCE</span>
                  <span className="text-(--color-green)">LEVEL 5</span>
                </div>
                <div className="flex items-center justify-between text-[10px] mt-1">
                  <span className="text-(--color-ink-faint)">ACCESS</span>
                  <span className="text-(--color-green) flex items-center gap-1">
                    GRANTED
                    <span className="w-1.5 h-1.5 rounded-full bg-(--color-green) inline-block" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-(--color-ink-faint) hover:text-(--color-green) transition-colors"
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
