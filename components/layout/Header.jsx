import Image from "next/image";
import Container from "../ui/Container";
import ActionButton from "../ui/ActionButton";

export default function Header({ content, currentLanguage, onLanguageChange, languages }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060a11]/80 backdrop-blur-xl">
      <Container className="py-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <a href="#hero" className="group flex items-center gap-3">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2 shadow-soft md:h-16 md:w-16">
              <Image
                src="/brand/skillbridge-mark.png"
                alt="Skill Bridge brand mark"
                width={58}
                height={58}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-white transition group-hover:text-blue-300">
                Skill Bridge
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {content.navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center rounded-full border border-white/15 bg-white/5 p-1 md:flex">
              {languages.map((language) => (
                <button
                  key={language.code}
                  type="button"
                  onClick={() => onLanguageChange(language.code)}
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold transition ${
                    currentLanguage === language.code
                      ? "bg-blue-500/90 text-white"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {language.label}
                </button>
              ))}
            </div>
            <ActionButton href="#contact" variant="secondary" className="px-4 py-2 text-xs md:text-sm">
              {content.cta}
            </ActionButton>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3 md:hidden">
          <nav className="flex gap-2 overflow-x-auto pb-1">
            {content.navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition hover:border-white/30 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center rounded-full border border-white/15 bg-white/5 p-1">
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                onClick={() => onLanguageChange(language.code)}
                className={`rounded-full px-2 py-1 text-[11px] font-semibold transition ${
                  currentLanguage === language.code
                    ? "bg-blue-500/90 text-white"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {language.label}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}
