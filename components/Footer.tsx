import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const xPath =
  "M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z";
const socialLinks = [
  { name: "X", href: "https://x.com/workload" },
  { name: "Instagram", href: "https://instagram.com/workload", icon: Instagram },
  { name: "LinkedIn", href: "https://linkedin.com/company/workload", icon: Linkedin },
];

const footerLinks = [
  {
    title: "Explore",
    items: [
      { label: "Properties", href: "/properties" },
      { label: "Developments", href: "/developments" },
      { label: "Neighborhoods", href: "/neighborhoods" },
      { label: "Sell with Us", href: "/sell" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "White-Glove Tours", href: "#" },
      { label: "Investment Advisory", href: "#" },
      { label: "Portfolio Strategy", href: "#" },
    ],
  },
  {
    title: "Contact",
    items: [
      { label: "hello@workloadestate.com", href: "mailto:hello@workloadestate.com" },
      { label: "+234 1 800 0000", href: "tel:+23418000000" },
      { label: "Lagos · Abuja · Port Harcourt", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white/80 px-6 py-12 shadow-inner shadow-slate-200/40">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Workload Studios</p>
          <p className="text-2xl font-display text-deepSlate">Estate</p>
          <p className="text-sm text-slate-500">
            Architectural real estate services for discerning clients across Nigeria.
          </p>
        </div>
        {footerLinks.map((column) => (
          <div key={column.title} className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.4em] text-slate-400">{column.title}</p>
            <div className="space-y-2 text-sm">
              {column.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-slate-600 transition hover:text-deepSlate"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div className="space-y-4">
          <p className="text-[11px] uppercase tracking-[0.4em] text-slate-400">Follow</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                return (
                  <Link
                    href={link.href}
                    key={link.name}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/5 bg-deepSlate text-stone hover:border-stone"
                    aria-label={link.name}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.icon ? (
                      <link.icon className="h-5 w-5" />
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        aria-label="X logo"
                        className="h-5 w-5 fill-current"
                      >
                        <path d={xPath} />
                      </svg>
                    )}
                  </Link>
                );
              })}
            </div>
        </div>
      </div>
      <p className="mt-10 text-center text-[12px] uppercase tracking-[0.4em] text-slate-400">
        © {new Date().getFullYear()} Workload Studios Estate · Crafted in Lagos.
      </p>
    </footer>
  );
}
