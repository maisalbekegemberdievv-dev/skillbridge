import Image from "next/image";
import { ArrowUpRight, Building2, CircleCheckBig, Globe2 } from "lucide-react";
import Container from "../ui/Container";
import ActionButton from "../ui/ActionButton";

const trustIcons = [Globe2, CircleCheckBig, Building2];

export default function HeroSection({ content }) {
  return (
    <section id="hero" className="relative overflow-hidden section-spacing pb-16 pt-16 md:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute -left-32 top-12 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px] animate-pulseSoft" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-[120px] animate-float" />

      <Container className="relative">
        <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-blue-200">
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/10 p-1">
                <Image
                  src="/brand/skillbridge-mark.png"
                  alt="Skill Bridge mark"
                  width={22}
                  height={22}
                  className="h-auto w-full object-contain"
                />
              </div>
              <span>{content.badge}</span>
            </div>

            <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight text-white md:text-6xl xl:text-7xl">
              {content.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-300 md:text-xl">{content.subtitle}</p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
              {content.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <ActionButton href="#contact">
                {content.ctaPrimary}
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </ActionButton>
              <ActionButton href="#contact" variant="secondary">
                {content.ctaSecondary}
              </ActionButton>
            </div>
          </div>

          <aside className="glass-card soft-divider rounded-3xl p-6 shadow-soft md:p-8">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {content.trustTitle}
              </p>
              <div className="rounded-lg border border-white/10 bg-white/10 px-2 py-1">
                <Image
                  src="/brand/skillbridge-full.png"
                  alt="Skill Bridge logo"
                  width={120}
                  height={28}
                  className="h-6 w-auto object-contain"
                />
              </div>
            </div>
            <div className="space-y-4">
              {content.trustSignals.map((item, index) => {
                const Icon = trustIcons[index];
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:border-blue-300/30 hover:bg-white/[0.06]"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
