export default function SectionHeading({
  command,
  title,
  subtitle,
}: {
  command: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="font-mono text-xs md:text-sm text-(--color-green-dim) mb-3 flex items-center gap-2">
        <span className="text-(--color-ink-faint)">amit@dedsec</span>
        <span className="text-(--color-ink-faint)">:~$</span>
        <span>{command}</span>
        <span className="terminal-caret" />
      </div>
      <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-(--color-ink) tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-(--color-ink-muted) text-sm md:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 h-px w-full bg-gradient-to-r from-(--color-line-bright) via-(--color-line) to-transparent" />
    </div>
  );
}
