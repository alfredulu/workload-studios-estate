"use client";

import { motion } from "framer-motion";
import PropertyCard from "./PropertyCard";
import { featuredProperties } from "@/lib/property";

export default function FeaturedSlider() {
  return (
    <section className="mt-14">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
            Signature Collection
          </p>
          <h2 className="text-3xl font-display text-midnight">Featured Listings</h2>
        </div>
        <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
          Lagos • Abuja • Port Harcourt
        </p>
      </div>

      <motion.div
        className="mt-6 overflow-x-auto pb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex gap-6">
          {featuredProperties.map((property) => (
            <div
              key={property.slug}
              className="min-w-[320px] flex-shrink-0"
            >
              <PropertyCard property={property} compact />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
