"use client";

import { Bed, Bath, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Property } from "@/data/properties";

type PropertyCardProps = {
  property: Property;
  compact?: boolean;
};

export default function PropertyCard({ property, compact }: PropertyCardProps) {
  return (
    <motion.article
      layout
      whileHover={{ translateY: compact ? 0 : -5 }}
      className={`flex w-full flex-col rounded-3xl border border-slate-200 bg-white/70 p-6 transition-shadow hover:shadow-glass ${
        compact ? "gap-4" : "gap-6"
      }`}
    >
      <div className="relative h-64 overflow-hidden rounded-2xl bg-slate-100">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${property.images[0]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
          {property.type}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
          {property.address}
        </p>
        <h3 className="text-2xl font-display text-midnight">{property.name}</h3>
        <p className="text-lg font-semibold text-midnight">{property.price}</p>
      </div>

      <div className="flex w-full items-center justify-between text-xs uppercase tracking-[0.4em] text-slate-500">
        <span className="flex items-center gap-2">
          <Bed size={14} />
          {property.bedrooms} Beds
        </span>
        <span className="flex items-center gap-2">
          <Bath size={14} />
          {property.bathrooms} Baths
        </span>
        <span className="flex items-center gap-2">
          <MapPin size={14} />
          {property.size}
        </span>
      </div>

      <Link
        href={`/properties/${property.slug}`}
        className="mt-4 inline-flex items-center justify-between rounded-full border border-slate-200 bg-midnight px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-gold transition hover:bg-black hover:text-white"
      >
        View Details
        <span aria-hidden>→</span>
      </Link>
    </motion.article>
  );
}
