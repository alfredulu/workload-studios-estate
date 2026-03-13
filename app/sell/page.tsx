"use client";

import Link from "next/link";

export default function SellPage() {
  return (
    <section className="mx-auto max-w-5xl space-y-10 px-6 pb-20 pt-12">
      <div className="rounded-[32px] border border-slate-200 bg-white/90 p-10 shadow-glass shadow-slate-200/40">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
          Sell With Us
        </p>
        <h1 className="mt-2 text-4xl font-display text-midnight">
          Partner with Workload Studios Estate
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          We craft bespoke campaigns for high-value sellers, ensuring every listing
          receives professional staging, cinematic media, and discreet exposure.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Our Promise</p>
            <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
              Targeted marketing, legal partners, and tailored owner communication plans.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Available Channels</p>
            <ul className="mt-3 space-y-1 text-sm text-slate-600">
              <li>• International buyer introductions</li>
              <li>• Concierge viewings & inspections</li>
              <li>• Private showings for high-net-worth clients</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between text-xs uppercase tracking-[0.4em] text-slate-500">
          <p>Ready to unlock premium demand?</p>
          <Link
            href="/properties"
            className="text-midnight hover:text-black"
          >
            Browse how we showcase assets →
          </Link>
        </div>
      </div>

      <form className="grid gap-6 rounded-[32px] border border-slate-200 bg-white/80 p-8 shadow-glass shadow-slate-200/30 md:grid-cols-2">
        <div className="space-y-4">
          <label className="text-xs uppercase tracking-[0.4em] text-slate-400">
            Name
            <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-midnight" />
          </label>
          <label className="text-xs uppercase tracking-[0.4em] text-slate-400">
            Email
            <input
              type="email"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-midnight"
            />
          </label>
          <label className="text-xs uppercase tracking-[0.4em] text-slate-400">
            Phone
            <input
              type="tel"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-midnight"
            />
          </label>
        </div>
        <div className="space-y-4">
          <label className="text-xs uppercase tracking-[0.4em] text-slate-400">
            Property Type
            <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-midnight">
              <option>Luxury</option>
              <option>Commercial</option>
              <option>Residential</option>
            </select>
          </label>
          <label className="text-xs uppercase tracking-[0.4em] text-slate-400">
            Estimated Value
            <input
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-midnight"
              placeholder="₦1B - ₦10B"
            />
          </label>
          <label className="text-xs uppercase tracking-[0.4em] text-slate-400">
            Message
            <textarea className="mt-2 h-24 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-midnight" />
          </label>
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full rounded-2xl border border-midnight bg-midnight px-5 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-gold transition hover:bg-black"
          >
            Submit Property
          </button>
        </div>
      </form>
    </section>
  );
}
