import { MapPin } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactSidebar from "@/components/ContactSidebar";
import PropertyGallery from "@/components/PropertyGallery";
import { getPropertyBySlug } from "@/lib/property";

type Props = {
  params: {
    slug: string;
  };
};

export default function PropertyDetail({ params }: Props) {
  const property = getPropertyBySlug(params.slug);

  if (!property) {
    return notFound();
  }

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-10">
      <div className="mb-6 text-xs uppercase tracking-[0.4em] text-slate-400">
        <Link href="/properties" className="text-slate-500 hover:text-midnight">
          ← Back to Properties
        </Link>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-6">
          <div className="relative h-80 overflow-hidden rounded-[32px] border border-slate-200 bg-slate-100 shadow-lg">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${property.images[0]})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-full border border-white/70 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white">
              {property.type}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
              {property.address}
            </p>
            <h1 className="text-4xl font-display text-midnight">{property.name}</h1>
            <p className="text-3xl font-semibold text-midnight">{property.price}</p>
            <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                {property.address}
              </span>
              <span>{property.size}</span>
            </div>
          </div>

          <p className="text-lg text-slate-600">{property.description}</p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-4 text-sm text-slate-500">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Bedrooms</p>
              <p className="mt-2 text-2xl font-semibold text-midnight">
                {property.bedrooms}
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-4 text-sm text-slate-500">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Bathrooms</p>
              <p className="mt-2 text-2xl font-semibold text-midnight">
                {property.bathrooms}
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-4 text-sm text-slate-500">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Size</p>
              <p className="mt-2 text-2xl font-semibold text-midnight">
                {property.size}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-display text-midnight">Key Features</h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {property.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm uppercase tracking-[0.4em] text-slate-500"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <PropertyGallery images={property.images.slice(1)} />
        </div>

        <ContactSidebar propertyName={property.name} />
      </div>
    </section>
  );
}
