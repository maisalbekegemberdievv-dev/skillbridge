import Image from "next/image";
import Container from "../ui/Container";

export default function Footer({ content }) {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="flex flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-1.5">
            <Image
              src="/brand/skillbridge-mark.png"
              alt="Skill Bridge brand mark"
              width={34}
              height={34}
              className="h-auto w-full object-contain"
            />
          </div>
          <p>© {new Date().getFullYear()} Skill Bridge. {content.rights}</p>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="/brand/skillbridge-full.png"
            alt="Skill Bridge wordmark"
            width={126}
            height={28}
            className="h-6 w-auto object-contain opacity-85"
          />
          <p>{content.location}</p>
        </div>
      </Container>
    </footer>
  );
}
