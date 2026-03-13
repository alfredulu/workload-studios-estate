"use client";

import clsx from "clsx";
import PropertyCard from "@/components/PropertyCard";
import { propertyTypes, filterByType } from "@/lib/property";
import type { PropertyType } from "@/data/properties";
import { useMemo, useState } from "react";

export default function PropertiesPage() {
  const [activeFilter, setActiveFilter] = useState<PropertyType | "All">("All");
  const filteredProperties = useMemo(
    () => filterByType(activeFilter),
    [activeFilter]
  );

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="flex flex-col gap-4 border-b border-slate-200 pb-8">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Portfolio</p>
        <h1 className="text-4xl font-display text-midnight">Explore Properties</h1>
        <p className="max-w-2xl text-lg text-slate-600">
          Filter through carefully vetted estates and workspaces. Each listing is ready to preview with dedicated support personnel.
        </p>
        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.4em]">
          <button
            onClick={() => setActiveFilter("All")}
            className={clsx(
              "rounded-full border px-5 py-2 transition",
              activeFilter === "All"
                ? "border-midnight bg-midnight/10 text-midnight"
                : "border-slate-200 text-slate-500 hover:border-midnight hover:text-midnight"
            )}
          >
            All
          </button>
          {propertyTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={clsx(
                "rounded-full border px-5 py-2 transition",
                activeFilter === type
                  ? "border-midnight bg-midnight/10 text-midnight"
                  : "border-slate-200 text-slate-500 hover:border-midnight hover:text-midnight"
              )}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.slug} property={property} />
        ))}
      </div>
    </section>
  );
}
