import { useEffect, useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import { withBase } from "../lib/url";

const links = [
  { href: "#about", label: "whoami" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#certifications", label: "certs" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-(--color-bg)/90 backdrop-blur-md border-b border-(--color-line)" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-mono font-bold text-(--color-ink)">
          <ShieldCheck className="w-5 h-5 text-(--color-green)" strokeWidth={1.8} />
          <span>
            amit<span className="text-(--color-green)">.</span>roy
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1 font-mono text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded text-(--color-ink-muted) hover:text-(--color-green) transition-colors"
            >
              ./{l.label}
            </a>
          ))}
          <a
            href={withBase("/assets/Amit_Roy_Resume.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 rounded border border-(--color-green-dim) text-(--color-green) hover:bg-(--color-green) hover:text-(--color-bg) transition-colors"
          >
            resume.pdf
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden text-(--color-ink)"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-(--color-bg) border-b border-(--color-line) px-5 pb-5 flex flex-col gap-1 font-mono text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-(--color-ink-muted) hover:text-(--color-green) transition-colors border-b border-(--color-line)/50"
            >
              ./{l.label}
            </a>
          ))}
          <a
            href={withBase("/assets/Amit_Roy_Resume.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 px-4 py-2.5 text-center rounded border border-(--color-green-dim) text-(--color-green)"
          >
            resume.pdf
          </a>
        </div>
      )}
    </header>
  );
}
