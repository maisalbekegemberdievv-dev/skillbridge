import Link from "next/link";

const styles = {
  primary:
    "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-soft hover:scale-[1.02] hover:from-blue-400 hover:to-blue-500",
  secondary:
    "border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
};

export default function ActionButton({ href, children, variant = "primary", className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
