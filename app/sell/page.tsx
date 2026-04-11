"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const journeySteps = [
  {
    label: "Discovery",
    detail:
      "Curated site visit, valuation, and bespoke marketing brief within 48 hours.",
  },
  {
    label: "Storytelling",
    detail:
      "Cinematic staging, editorial content, and investor-ready dossiers.",
  },
  {
    label: "Demand",
    detail:
      "Private showings, pre-qualified buyers, and quiet listings for discretion.",
  },
  {
    label: "Closing",
    detail:
      "Contract support, concierge closing, and bespoke handover rituals.",
  },
];

export default function SellPage() {
  return (
    <section className="mx-auto max-w-6xl space-y-12 px-6 pb-20 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-[36px] border border-black/5 bg-white/90 p-10 shadow-glass"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
          Sell With Us
        </p>
        <h1 className="mt-2 text-4xl font-display text-deepSlate">
          Architectural marketing for elite sellers.
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          We engineer the seller’s journey with tactility, precision, and
          premium audiences to achieve the fastest, most discreet closing.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.4em] text-slate-500">
          <div className="rounded-2xl border border-black/10 px-5 py-3">
            Exclusive buyer network · Lagos, Abuja, London
          </div>
          <div className="rounded-2xl border border-black/10 px-5 py-3">
            Staged viewings · Cinematic films · Legal concierge
          </div>
        </div>
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 rounded-[32px] border border-black/5 bg-white/80 p-8 shadow-sm"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
            Seller’s Journey
          </p>
          <div className="space-y-4">
            {journeySteps.map((step, index) => (
              <div key={step.label} className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-black/5 bg-deepSlate/5 text-[11px] font-semibold uppercase tracking-[0.4em] text-deepSlate">
                  {index + 1}
                </div>
                <div>
                  <p className="text-sm font-display text-deepSlate">
                    {step.label}
                  </p>
                  <p className="text-sm text-slate-500">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-black/5 bg-slate-50/60 p-5 text-sm text-slate-500">
            <p className="text-[11px] uppercase tracking-[0.4em] text-slate-400">
              Available Units Counter
            </p>
            <p className="mt-2 text-3xl font-display text-deepSlate">
              12 Signature Residences
            </p>
            <p className="text-sm">
              Open for curated buyers with soft closing window in Q3.
            </p>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-black/5 bg-white/90 p-8 shadow-glass"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
            Lead Form
          </p>
          <h2 className="mt-2 text-3xl font-display text-deepSlate">
            Submit Your Asset
          </h2>
          <p className="text-sm text-slate-500">
            One form unlocks valuation, marketing strategy, and direct
            introductions to vetted buyers.
          </p>
          <div className="mt-6 space-y-4">
            <label className="text-[11px] uppercase tracking-[0.4em] text-slate-400">
              Full Name
              <input className="mt-2 w-full rounded-2xl border border-black/5 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-deepSlate" />
            </label>
            <label className="text-[11px] uppercase tracking-[0.4em] text-slate-400">
              Email
              <input
                type="email"
                className="mt-2 w-full rounded-2xl border border-black/5 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-deepSlate"
              />
            </label>
            <label className="text-[11px] uppercase tracking-[0.4em] text-slate-400">
              Phone
              <input
                type="tel"
                className="mt-2 w-full rounded-2xl border border-black/5 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-deepSlate"
              />
            </label>
            <label className="text-[11px] uppercase tracking-[0.4em] text-slate-400">
              Property Address
              <input className="mt-2 w-full rounded-2xl border border-black/5 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-deepSlate" />
            </label>
            <label className="text-[11px] uppercase tracking-[0.4em] text-slate-400">
              Estimated Value
              <input className="mt-2 w-full rounded-2xl border border-black/5 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-deepSlate" />
            </label>
            <label className="text-[11px] uppercase tracking-[0.4em] text-slate-400">
              Message
              <textarea className="mt-2 h-28 w-full rounded-2xl border border-black/5 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-deepSlate" />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-2xl bg-terracotta px-5 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-stone transition hover:bg-black hover:text-white"
          >
            Request Sales Strategy
          </button>
          <p className="mt-4 text-xs uppercase tracking-[0.4em] text-slate-400">
            Already working with us?{" "}
            <Link href="/" className="text-deepSlate hover:text-black">
              View properties →
            </Link>
          </p>
        </motion.form>
      </div>
    </section>
  );
}
