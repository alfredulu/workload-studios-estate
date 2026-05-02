"use client";

import { ShieldCheck, Sparkles, Users } from "lucide-react";

const reasons = [
  {
    title: "Full Support",
    detail: "From property search to documentation, we handle everything. You have a dedicated agent from start to finish.",
    icon: Users,
  },
  {
    title: "Verified Listings",
    detail: "We inspect every property before it goes live. No fake listings, no inflated prices.",
    icon: Sparkles,
  },
  {
    title: "Market Knowledge",
    detail: "We know the Lagos, Abuja, and Port Harcourt markets well. We'll advise you on fair prices and help you negotiate.",
    icon: ShieldCheck,
  },
];

export default function WhyChoose() {
  return (
    <section className="mt-16 grid gap-8 md:grid-cols-3">
      {reasons.map((reason) => {
        const Icon = reason.icon;
        return (
          <div
            key={reason.title}
            className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white/80 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-glass"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-midnight/10 text-midnight">
              <Icon size={20} />
            </div>
            <div>
              <h3 className="text-xl font-display text-midnight">
                {reason.title}
              </h3>
              <p className="text-sm text-slate-600">{reason.detail}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
