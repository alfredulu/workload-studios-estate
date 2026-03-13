"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "Sell With Us", href: "/sell" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "bg-white/80 border-white/40 backdrop-blur-md shadow-sm"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-sm uppercase tracking-[0.4em] text-slate-400">
            Workload Studios
          </span>
          <span className="text-2xl font-display text-midnight">Estate</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.3em] text-slate-600 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "transition-colors duration-200",
                pathname === link.href
                  ? "text-midnight"
                  : "text-slate-500 hover:text-midnight"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 md:flex">
          <Phone size={16} />
          <span>+234 1 800 0000</span>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="flex items-center justify-center rounded-full border border-slate-200 bg-white/80 p-2 shadow-sm transition hover:border-slate-400 md:hidden"
        >
          <Menu size={20} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 140 }}
            className="fixed inset-y-0 right-0 z-50 w-3/4 border-l border-slate-200 bg-white/95 p-6 shadow-xl backdrop-blur-md md:hidden"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                  Workload
                </p>
                <p className="text-2xl font-display text-midnight">Estate</p>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="rounded-full border border-slate-200 p-2 transition hover:border-slate-400"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="mt-12 flex flex-col gap-6 text-lg font-semibold uppercase tracking-[0.3em]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={clsx(
                    "transition-colors duration-200",
                    pathname === link.href
                      ? "text-midnight"
                      : "text-slate-500 hover:text-midnight"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-10 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-slate-600">
              <Phone size={16} />
              <span>+234 1 800 0000</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
