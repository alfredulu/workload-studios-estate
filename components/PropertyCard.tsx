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
      whileHover={{ translateY: compact ? 0 : -6 }}
      className={`group flex w-full flex-col rounded-[32px] border border-black/5 bg-white/80 p-6 transition duration-300 ${
        compact ? "gap-4" : "gap-6"
      } hover:shadow-glass`}
    >
      <motion.div
        className="relative h-64 overflow-hidden rounded-3xl bg-slate-100"
        whileHover={{ scale: 1.05 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
          style={{ backgroundImage: `url(${property.images[0]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deepSlate/60 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-black/5 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.4em] text-slate-500">
          {property.type}
        </div>
      </motion.div>

      <div className="flex flex-col gap-1">
        <p className="text-[11px] uppercase tracking-[0.4em] text-slate-500">{property.address}</p>
        <h3 className="text-2xl font-display text-deepSlate">{property.name}</h3>
        <p className="text-lg font-semibold text-deepSlate">{property.price}</p>
      </div>

      <div className="flex w-full items-center justify-between text-[11px] uppercase tracking-[0.4em] text-slate-500">
        <span className="flex items-center gap-1">
          <Bed size={14} />
          {property.bedrooms} Beds
        </span>
        <span className="flex items-center gap-1">
          <Bath size={14} />
          {property.bathrooms} Baths
        </span>
        <span className="flex items-center gap-1 text-[10px]">
          <MapPin size={14} />
          {property.size}
        </span>
      </div>

      <Link
        href={`/properties/${property.slug}`}
        className="mt-4 inline-flex items-center justify-between rounded-full border border-black/5 bg-deepSlate/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.4em] text-stone transition hover:bg-deepSlate hover:text-white"
      >
        View Details
        <span aria-hidden>→</span>
      </Link>
    </motion.article>
  );
}
