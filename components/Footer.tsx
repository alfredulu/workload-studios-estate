import type { SimpleIcon } from "simple-icons";
import { siInstagram, siTiktok, siX } from "simple-icons/icons";
import Link from "next/link";

const socialLinks: {
  name: string;
  href: string;
  icon: SimpleIcon;
}[] = [
  { name: "Instagram", href: "https://instagram.com", icon: siInstagram },
  { name: "TikTok", href: "https://tiktok.com", icon: siTiktok },
  { name: "X", href: "https://x.com", icon: siX },
];

function SocialIcon({ icon }: { icon: SimpleIcon }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-label={icon.title}
      className="h-6 w-6 fill-current"
    >
      <path d={icon.path} />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 px-6 py-10 shadow-inner shadow-slate-200/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 text-sm text-slate-700 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
            Workload Studios
          </p>
          <p className="text-2xl font-display text-midnight">Estate</p>
        </div>
        <div>
          <p className="text-[13px] uppercase tracking-[0.4em] text-slate-400">
            Contact
          </p>
          <p className="text-base text-midnight">hello@workloadestate.com</p>
        </div>
        <div className="flex items-center gap-4 text-white">
          {socialLinks.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-midnight text-gold transition hover:text-white hover:bg-midnight/90"
              aria-label={link.name}
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon icon={link.icon} />
            </Link>
          ))}
        </div>
      </div>
      <p className="mt-8 text-center text-[13px] uppercase tracking-[0.4em] text-slate-400">
        © {new Date().getFullYear()} Workload Studios Estate. Crafted in Lagos.
      </p>
    </footer>
  );
}
