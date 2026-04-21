import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function ProcessSection({ content }) {
  return (
    <section id="process" className="section-spacing">
      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="relative mt-12">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-blue-300/45 to-transparent md:block" />
          <ol className="grid gap-4 md:grid-cols-5">
            {content.steps.map((step, index) => (
              <li
                key={step}
                className="glass-card soft-divider relative rounded-3xl p-5 transition duration-300 hover:border-blue-300/30 hover:bg-white/[0.06]"
              >
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-blue-300/30 bg-blue-500/15 text-sm font-bold text-blue-200">
                  {index + 1}
                </div>
                <p className="text-sm font-medium text-slate-100 md:text-base">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
