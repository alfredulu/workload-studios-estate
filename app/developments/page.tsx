"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    title: "Planning",
    date: "Q2 2026",
    detail:
      "Site assessment, architectural planning, and structural survey completed. Lakefront parcel confirmed.",
  },
  {
    title: "Construction",
    date: "Q3 2026",
    detail: "Foundation, structure, and facade work underway. On schedule.",
  },
  {
    title: "Finishing",
    date: "Q1 2027",
    detail:
      "Interior finishing, lobby fit-out, and amenity installation in progress.",
  },
  {
    title: "Handover",
    date: "Q2 2027",
    detail:
      "Property handover to buyers and opening of the sales office for walk-in viewings.",
  },
];

const availableUnits = [
  { label: "Residences Remaining", value: "08" },
  { label: "Sky Villas", value: "02" },
  { label: "Commercial Pavilions", value: "03" },
];

export default function DevelopmentsPage() {
  return (
    <section className="mx-auto max-w-6xl space-y-10 px-6 pb-20 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-[36px] border border-black/5 bg-white/90 p-10 shadow-glass"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
          Developments
        </p>
        <h1 className="mt-2 text-4xl font-display text-deepSlate">
          New Developments in Lagos and Abuja. Off-Plan Units Available
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          We work directly with developers to list off-plan units before they
          sell out. Register your interest early to get first access and
          pre-launch pricing.
        </p>
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-black/5 bg-white/80 p-8 shadow-sm"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
            Construction Timeline
          </p>
          <div className="mt-6 space-y-6">
            {timeline.map((phase, index) => (
              <div key={phase.title} className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-black/5 bg-deepSlate/5 text-xs font-semibold uppercase tracking-[0.4em] text-deepSlate">
                  {index + 1}
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-display text-deepSlate">
                    {phase.title}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.4em] text-slate-400">
                    {phase.date}
                  </p>
                  <p className="text-sm text-slate-500">{phase.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 rounded-[32px] border border-black/5 bg-white/90 p-8 shadow-glass"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
            Available Units
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {availableUnits.map((unit) => (
              <div
                key={unit.label}
                className="space-y-2 rounded-2xl border border-black/5 bg-slate-50/70 p-4 text-xs text-slate-500"
              >
                <p className="text-[10px] uppercase tracking-[0.4em] text-slate-400">
                  {unit.label}
                </p>
                <p className="text-3xl font-display text-deepSlate">
                  {unit.value}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-black/5 bg-slate-100/70 p-6 text-sm text-slate-600">
            <p className="text-sm">
              Register your interest for off-plan units and pre-launch pricing:
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.4em] text-slate-400">
              Private hotline
            </p>
            <p className="text-lg font-display text-deepSlate">
              +234 1 800 0000
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
