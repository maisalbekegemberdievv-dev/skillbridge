import { BadgeCheck, Clock4, FileCheck2, MessagesSquare } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const reasonIcons = [BadgeCheck, Clock4, FileCheck2, MessagesSquare];

export default function WhyUsSection({ content }) {
  return (
    <section id="why-us" className="section-spacing">
      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {content.items.map((reason, index) => {
            const Icon = reasonIcons[index];
            return (
              <article
                key={reason.title}
                className="group glass-card soft-divider rounded-3xl p-6 transition duration-300 hover:-translate-y-0.5 hover:border-blue-300/30"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300 transition duration-300 group-hover:bg-blue-500/25">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{reason.text}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
