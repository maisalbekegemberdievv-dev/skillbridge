import { Languages, PlaneTakeoff, SearchCheck, ShieldCheck } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const serviceIcons = [SearchCheck, ShieldCheck, PlaneTakeoff, Languages];

export default function ServicesSection({ content }) {
  return (
    <section id="services" className="section-spacing">
      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {content.items.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <article
                key={service.title}
                className="group glass-card soft-divider rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300/35 hover:bg-white/[0.06]"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300 transition duration-300 group-hover:scale-105 group-hover:bg-blue-500/25">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{service.text}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
