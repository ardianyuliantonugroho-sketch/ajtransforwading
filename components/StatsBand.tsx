import { secondaryStats } from "@/lib/data";

export default function StatsBand() {
  return (
    <section className="border-y border-line-light bg-paper-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-balance font-display text-2xl font-bold leading-tight text-ink-900 sm:text-3xl">
          Kirim lebih mudah, bisnis lebih maju
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
          Percayakan logistik Anda kepada kami dan fokuslah pada pertumbuhan
          bisnis Anda. AJ Trans siap menjadi tulang punggung rantai pasok
          Anda.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {secondaryStats.map((s, i) => (
            <div key={i} className="border-l-2 border-cargo-orange pl-4">
              <p className="font-mono text-2xl font-medium text-ink-900">
                {s.value}
              </p>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
