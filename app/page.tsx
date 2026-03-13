import Link from "next/link";
import FeaturedSlider from "@/components/FeaturedSlider";
import WhyChoose from "@/components/WhyChoose";
import BentoGrid from "@/components/BentoGrid";

export default function Home() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-6">
      <div className="grid gap-10 rounded-[36px] border border-slate-200 bg-white/80 p-8 shadow-glass shadow-slate-200/30 md:grid-cols-[1.2fr,0.8fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
            Workload Studios Estate
          </p>
          <h1 className="text-4xl font-display text-midnight leading-tight md:text-5xl">
            Bespoke Nigerian real estate with a clean luxury mindset.
          </h1>
          <p className="text-lg text-slate-600">
            Showcase, negotiate, and close on premium properties across Lagos and
            beyond with tailored support, white-glove tours, and refined branding.
          </p>

          <form className="grid gap-4 md:grid-cols-3">
            <label className="text-xs uppercase tracking-[0.4em] text-slate-400">
              Location
              <input
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-midnight"
                placeholder="Lagos, Abuja..."
              />
            </label>
            <label className="text-xs uppercase tracking-[0.4em] text-slate-400">
              Price
              <input
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-midnight"
                placeholder="₦500M - ₦10B"
              />
            </label>
            <label className="text-xs uppercase tracking-[0.4em] text-slate-400">
              Property Type
              <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-midnight">
                <option>Luxury</option>
                <option>Commercial</option>
                <option>Residential</option>
              </select>
            </label>
          </form>

          <div className="flex flex-wrap items-center gap-4">
            <button className="rounded-2xl bg-midnight px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-gold transition hover:bg-black">
              Start Search
            </button>
            <Link
              href="/properties"
              className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 underline-offset-2 transition hover:text-midnight"
            >
              Browse Listings
            </Link>
          </div>
        </div>

        <div className="grid gap-5 text-sm text-slate-600">
          <div className="rounded-3xl border border-slate-200 bg-midnight/5 p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
              Concierge Access
            </p>
            <p className="mt-3 text-2xl font-display text-midnight">24/7 Private Tours</p>
            <p className="mt-2 text-slate-500">
              On-call advisors, secure viewings, and curated itineraries across every major neighborhood.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
              Portfolio
            </p>
            <p className="mt-3 text-2xl font-display text-midnight">250+ curated properties</p>
            <p className="mt-2 text-slate-500">
              Luxury, commercial, and residential assets prepared for immediate presentation.
            </p>
          </div>
        </div>
      </div>

      <FeaturedSlider />
      <WhyChoose />
      <BentoGrid />
    </section>
  );
}
