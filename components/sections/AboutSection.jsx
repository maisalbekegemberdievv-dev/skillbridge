import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function AboutSection({ content }) {
  return (
    <section id="about" className="section-spacing">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr]">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />

          <div className="glass-card soft-divider rounded-3xl p-8 shadow-soft">
            <p className="text-base leading-relaxed text-slate-300">{content.body1}</p>
            <p className="mt-5 text-base leading-relaxed text-slate-400">{content.body2}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
