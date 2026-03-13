"use client";

import { motion } from "framer-motion";

const neighborhoods = [
  {
    name: "The Marina",
    price: "Avg ₦850M",
    vibe: "Executive, waterfront",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Highlands",
    price: "Avg ₦620M",
    vibe: "Minimalist, hillside",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Ikoyi Classic",
    price: "Avg ₦970M",
    vibe: "Modern, gated",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Lekki Marina",
    price: "Avg ₦680M",
    vibe: "Resort, lagoon",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Victoria Island",
    price: "Avg ₦790M",
    vibe: "Corporate, cosmopolitan",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Maitama Gardens",
    price: "Avg ₦540M",
    vibe: "Diplomatic, verdant",
    image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function NeighborhoodsPage() {
  return (
    <section className="mx-auto max-w-6xl space-y-10 px-6 pb-20 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-[36px] border border-black/5 bg-white/90 p-10 shadow-glass"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Neighborhoods</p>
        <h1 className="mt-2 text-4xl font-display text-deepSlate">
          Architectural contexts, curated for the luxury traveler and collector.
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Each card highlights the ambience, price point, and lifestyle aura for our most beloved zones.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-2"
      >
        {neighborhoods.map((hood) => (
          <motion.article
            key={hood.name}
            whileHover={{ translateY: -6 }}
            className="relative overflow-hidden rounded-[32px] border border-black/5 bg-white/70 shadow-sm"
          >
            <div
              className="h-64 bg-cover bg-center"
              style={{ backgroundImage: `linear-gradient(180deg, rgba(26,28,30,0.1), rgba(26,28,30,0.8)), url(${hood.image})` }}
            />
            <div className="space-y-2 px-6 py-6">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{hood.name}</p>
              <h3 className="text-2xl font-display text-deepSlate">{hood.vibe}</h3>
              <p className="text-sm text-slate-500">{hood.price}</p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-black/5 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-slate-500">
                  <span>Vibe</span>
                </span>
                <span className="rounded-full border border-black/5 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-slate-500">
                  <span>Average Price</span>
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
