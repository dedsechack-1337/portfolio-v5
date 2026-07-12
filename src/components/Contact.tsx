import { Mail, Phone, Code2, Copy, Check } from "lucide-react";
import { useState } from "react";
import type { SVGProps, ComponentType } from "react";
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "./BrandIcons";
import { profile } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — ignore */
    }
  };

  return (
    <section id="contact" className="relative max-w-6xl mx-auto px-5 md:px-8 py-24 md:py-32">
      <SectionHeading
        command="./contact.sh --open-channel"
        title="Establish connection"
        subtitle="Open to penetration testing, SOC, and AI-security engineering roles — or just a conversation about breaking (and fixing) things."
      />

      <Reveal>
        <div className="panel p-6 md:p-10 relative overflow-hidden">
          <div className="scanline absolute inset-0 opacity-40" />
          <div className="relative grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-2 h-2 rounded-full bg-(--color-green) animate-pulse" />
                <span className="font-mono text-xs text-(--color-green-dim) uppercase tracking-widest">
                  Status: available
                </span>
              </div>

              <button
                onClick={copyEmail}
                className="group flex items-center gap-3 text-left mb-4 w-full"
              >
                <Mail className="w-5 h-5 text-(--color-green-dim) shrink-0" />
                <span className="font-mono text-sm md:text-base text-(--color-ink) group-hover:text-(--color-green) transition-colors break-all">
                  {profile.email}
                </span>
                {copied ? (
                  <Check className="w-4 h-4 text-(--color-green) shrink-0" />
                ) : (
                  <Copy className="w-4 h-4 text-(--color-ink-faint) shrink-0" />
                )}
              </button>

              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 mb-2 group">
                <Phone className="w-5 h-5 text-(--color-green-dim) shrink-0" />
                <span className="font-mono text-sm md:text-base text-(--color-ink) group-hover:text-(--color-green) transition-colors">
                  {profile.phone}
                </span>
              </a>
            </div>

            <div className="flex flex-col gap-2.5">
              <SocialRow icon={GithubIcon} label="github.com/dedsechack-1337" href={profile.socials.github} />
              <SocialRow icon={LinkedinIcon} label="linkedin.com/in/dedsechaack1337" href={profile.socials.linkedin} />
              <SocialRow icon={Code2} label="leetcode.com/u/amitroy1337" href={profile.socials.leetcode} />
              <SocialRow icon={YoutubeIcon} label="youtube.com/@arproduction8597" href={profile.socials.youtube} />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function SocialRow({
  icon: Icon,
  label,
  href,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 py-2 px-3 rounded-md border border-(--color-line) hover:border-(--color-green-dim) transition-colors group"
    >
      <Icon className="w-4 h-4 text-(--color-green-dim) shrink-0" />
      <span className="font-mono text-xs md:text-sm text-(--color-ink-muted) group-hover:text-(--color-ink) transition-colors truncate">
        {label}
      </span>
    </a>
  );
}
