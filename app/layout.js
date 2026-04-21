import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata = {
  title: "Skill Bridge | International Recruitment",
  description:
    "Skill Bridge connects qualified talent from Central Asia with international employers through structured recruitment, documentation, and relocation support."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${manrope.variable} ${spaceGrotesk.variable} bg-surface font-sans text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
