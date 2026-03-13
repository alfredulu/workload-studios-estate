"use client";

import { Building, Home, Layers } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Luxury Residences",
    subtitle: "Banana Island, Ikoyi, VI",
    body: "Curated mansions, flagship penthouses, and sky villas with concierge-level service.",
    icon: Home,
    span: "md:col-span-2 md:row-span-2",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1500&q=80",
  },
  {
    title: "Commercial Hubs",
    subtitle: "Victoria Island & Lekki",
    body: "Signature office towers, creative campuses, and hospitality-ready buildings.",
    icon: Building,
    span: "",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1500&q=80",
  },
  {
    title: "Residential Collections",
    subtitle: "Lekki, Abuja, Port Harcourt",
    body: "Townhomes, terraces, and apartment suites shaped for modern Nigerian households.",
    icon: Layers,
    span: "",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1500&q=80",
  },
];

export default function BentoGrid() {
  return (
    <section className="mt-16">
      <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-slate-400">
        <p>Bento Grid</p>
        <p className="text-xs tracking-[0.4em] text-slate-500">
          Explore curated territories
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-4 md:grid-rows-2">
        {categories.map((category) => {
          const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative overflow-hidden rounded-3xl border border-black/5 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glass ${category.span}`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(26,28,30,0.2), rgba(26,28,30,0.8)), url(${category.image})`,
                    }}
                  />
                  <div className="relative flex h-full flex-col justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-deepSlate/10 p-3 text-deepSlate">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-display text-white">
                          {category.title}
                        </h3>
                        <p className="text-xs uppercase tracking-[0.4em] text-slate-200">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-100">{category.body}</p>
                  </div>
                </motion.div>
              );
        })}
      </div>
    </section>
  );
}
