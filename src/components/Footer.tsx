export default function Footer() {
  return (
    <footer className="border-t border-(--color-line)">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-(--color-ink-faint)">
          © {new Date().getFullYear()} Amit Roy — built with React, Vite &amp; Tailwind.
        </p>
        <p className="font-mono text-xs text-(--color-ink-faint)">
          root@dedsec:~$ <span className="text-(--color-green-dim)">exit 0</span>
        </p>
      </div>
    </footer>
  );
}
