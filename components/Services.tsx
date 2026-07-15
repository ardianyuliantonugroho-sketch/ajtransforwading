import { services } from "@/lib/data";
import { Icon } from "@/lib/icons";

export default function Services() {
  return (
    <section id="layanan" className="grain-navy py-20 text-paper-50">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cargo-orange">
          Apa yang Kami Tawarkan
        </p>
        <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-bold leading-tight sm:text-4xl">
          Layanan unggulan kami
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-paper-100/70">
          Solusi logistik lengkap dari hulu ke hilir untuk mendukung
          kelancaran operasional bisnis Anda.
        </p>

        <div className="mt-10 divide-y divide-paper-100/15 border-y border-paper-100/15">
          {services.map((s) => (
            <div
              key={s.code}
              className="grid grid-cols-[auto_1fr] items-start gap-5 py-6 sm:grid-cols-[5rem_auto_1fr] sm:items-center"
            >
              <span className="hidden font-mono text-xs text-paper-100/40 sm:block">
                {s.code}
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-paper-50/10">
                <Icon name={s.icon} className="h-5 w-5 text-cargo-orange" />
              </span>
              <div>
                <p className="font-display text-lg font-semibold">
                  {s.title}
                </p>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-paper-100/70">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
