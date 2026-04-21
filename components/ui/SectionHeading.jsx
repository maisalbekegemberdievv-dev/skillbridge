export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300/80">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-slate-300 md:text-lg">{description}</p>
      )}
    </div>
  );
}
