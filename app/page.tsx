"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FeaturedSlider from "@/components/FeaturedSlider";
import WhyChoose from "@/components/WhyChoose";
import BentoGrid from "@/components/BentoGrid";
import { properties } from "@/data/properties";

const stats = [
  { label: "Assets Managed", value: "$500M+" },
  { label: "Direct Buyer Network", value: "1,200+" },
  { label: "Private Tours Monthly", value: "92" },
];

const neighborhoodSpotlight = [
  {
    name: "The Marina",
    vibe: "Executive, riverside",
    price: "Avg ₦820M",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Highlands",
    vibe: "Minimalist, hillside",
    price: "Avg ₦620M",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Ikoyi Classic",
    vibe: "Modern, gated",
    price: "Avg ₦970M",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function Home() {
  const heroImage = properties[0]?.images?.[0];

  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 pt-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[40px] border border-black/5 bg-white/80 p-8 shadow-glass shadow-slate-200/40"
      >
        {heroImage && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage: `linear-gradient(125deg, rgba(26, 28, 30, 0.5), rgba(26, 28, 30, 0.8)), url(${heroImage})`,
            }}
          />
        )}
        <div className="relative z-10 grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
              Workload Studios Estate
            </p>
            <h1 className="text-4xl font-display text-deepSlate leading-tight md:text-5xl">
              Architectural residences and visionary masterplans sculpted for
              Nigeria&rsquo;s luxury elite.
            </h1>
            <p className="text-lg text-slate-600">
              From bespoke penthouses to landmark developments, we orchestrate
              elevated property journeys, blending tactile materials, cultural
              nuance, and white-glove concierge service.
            </p>

            <form className="grid gap-4 md:grid-cols-3">
              <label className="text-[11px] uppercase tracking-[0.4em] text-slate-400">
                Location
                <input
                  className="mt-2 w-full rounded-2xl border border-black/5 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-deepSlate"
                  placeholder="Lagos, Abuja..."
                />
              </label>
              <label className="text-[11px] uppercase tracking-[0.4em] text-slate-400">
                Price
                <input
                  className="mt-2 w-full rounded-2xl border border-black/5 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-deepSlate"
                  placeholder="₦500M - ₦10B"
                />
              </label>
              <label className="text-[11px] uppercase tracking-[0.4em] text-slate-400">
                Type
                <select className="mt-2 w-full rounded-2xl border border-black/5 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-deepSlate">
                  <option>Luxury</option>
                  <option>Commercial</option>
                  <option>Residential</option>
                </select>
              </label>
            </form>

            <div className="flex flex-wrap items-center gap-4">
              <button className="rounded-2xl bg-terracotta px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-stone transition hover:bg-black active:bg-black hover:text-white active:text-white">
                Start Search
              </button>
              <Link
                href="/properties"
                className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 underline-offset-2 transition hover:text-deepSlate"
              >
                Preview Portfolio
              </Link>
            </div>
          </div>

          <div className="relative h-full overflow-hidden rounded-[32px] border border-black/5 bg-deepSlate/30 p-10">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-90"
              style={{
                backgroundImage:
                  "linear-gradient(125deg, rgba(28,28,30,0.4), rgba(28,28,30,0.8)), url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80)",
              }}
            />
            <div className="relative z-10 flex h-full flex-col justify-between gap-6 text-white">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-200">
                Crafted Platforms
              </p>
              <h2 className="text-3xl font-display">
                Split-screen architecture, serene storytelling.
              </h2>
              <div className="space-y-2 text-sm">
                <p className="text-slate-200">
                  Signature materials, tactile palettes, and curated art
                  direction.
                </p>
                <p className="text-sm uppercase tracking-[0.4em] text-slate-200">
                  Lagos · Victoria Island · Lekki · Abuja
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <FeaturedSlider />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
            Neighborhood Spotlight
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Immersive locational insight
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {neighborhoodSpotlight.map((hood) => (
            <motion.article
              key={hood.name}
              whileHover={{ translateY: -6 }}
              className="relative overflow-hidden rounded-[32px] border border-black/5 bg-white/90 shadow-sm transition hover:shadow-glass"
            >
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${hood.image})` }}
              />
              <div className="space-y-1 px-6 py-6">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                  {hood.name}
                </p>
                <h3 className="text-2xl font-display text-deepSlate">
                  {hood.vibe}
                </h3>
                <p className="text-sm text-slate-500">{hood.price}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <WhyChoose />
      <BentoGrid />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid gap-6 rounded-[32px] border border-black/5 bg-white/80 p-8 shadow-glass md:grid-cols-3"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-2">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
              {stat.label}
            </p>
            <p className="text-3xl font-display text-deepSlate">{stat.value}</p>
            <div className="h-[1px] bg-black/10" />
            <p className="text-sm text-slate-500">
              Curated clients, architecture-forward strategies.
            </p>
          </div>
        ))}
      </motion.section>
    </section>
  );
}
