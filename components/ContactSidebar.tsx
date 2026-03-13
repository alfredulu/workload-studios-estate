"use client";

export default function ContactSidebar({
  propertyName,
}: {
  propertyName: string;
}) {
  return (
    <div className="w-full rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg lg:sticky lg:top-28">
      <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
        Contact Agent
      </p>
      <h3 className="mt-2 text-2xl font-display text-midnight">
        {propertyName}
      </h3>
      <form className="mt-6 flex flex-col gap-4">
        <label className="text-xs uppercase tracking-[0.4em] text-slate-400">
          Name
          <input
            type="text"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-midnight"
          />
        </label>
        <label className="text-xs uppercase tracking-[0.4em] text-slate-400">
          Email
          <input
            type="email"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-midnight"
          />
        </label>
        <label className="text-xs uppercase tracking-[0.4em] text-slate-400">
          Message
          <textarea
            className="mt-2 h-28 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-midnight"
          />
        </label>
        <button
          type="button"
          className="mt-2 rounded-2xl bg-midnight px-4 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-gold transition hover:bg-black"
        >
          Request Consultation
        </button>
      </form>
    </div>
  );
}
