import { whyUs } from "@/lib/data";
import { Icon } from "@/lib/icons";

export default function WhyUs() {
  return (
    <section id="kenapa-kami" className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-cargo-orange-dark">
        Keunggulan Kami
      </p>
      <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
        Mengapa memilih AJ Trans?
      </h2>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500">
        Kami bukan sekadar perusahaan pengiriman. Kami adalah mitra strategis
        yang berkomitmen pada kesuksesan bisnis Anda.
      </p>

      <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-line-light bg-line-light sm:grid-cols-2 lg:grid-cols-3">
        {whyUs.map((w) => (
          <div key={w.title} className="bg-paper-50 p-6">
            <Icon name={w.icon} className="h-6 w-6 text-cargo-orange-dark" />
            <p className="mt-3 font-display text-sm font-semibold text-ink-900">
              {w.title}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              {w.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
