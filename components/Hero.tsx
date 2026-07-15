import { stats, site } from "@/lib/data";
import RouteLine from "./RouteLine";

export default function Hero() {
  return (
    <section className="grain-navy relative overflow-hidden text-paper-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:gap-8 md:py-24">
        {/* Left: headline */}
        <div className="fade-up flex flex-col justify-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-cargo-orange">
            {site.legalName} &middot; Freight Forwarder
          </p>
          <h1 className="text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
            Solusi Logistik
            <br />
            <span className="text-cargo-orange">Terpercaya</span>
          </h1>
          <p className="mt-3 font-mono text-sm uppercase tracking-wider text-paper-100/70">
            Cepat &middot; Aman &middot; Efisien
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-paper-100/80">
            {site.legalName} — perusahaan freight forwarding skala global yang
            menghadirkan layanan logistik terbaik, seamless, dan andal untuk
            kebutuhan bisnis Anda.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#kontak"
              className="rounded-sm bg-cargo-orange px-5 py-3 font-mono text-xs uppercase tracking-wider text-navy-950 transition-transform hover:-translate-y-0.5"
            >
              Hubungi Kami Sekarang
            </a>
            <a
              href="#layanan"
              className="rounded-sm border border-paper-100/30 px-5 py-3 font-mono text-xs uppercase tracking-wider text-paper-50 transition-colors hover:border-cargo-orange hover:text-cargo-orange"
            >
              Lihat Layanan
            </a>
          </div>
        </div>

        {/* Right: manifest card (signature element) */}
        <div className="fade-up flex items-center [animation-delay:150ms]">
          <div className="perforated perforated-dark relative w-full rounded-sm border border-paper-100/15 bg-navy-900/60 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-paper-100/15 pb-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-paper-100/50">
                  Manifest No.
                </p>
                <p className="font-mono text-sm text-paper-50">AJT/2026/00842</p>
              </div>
              <span className="rounded-sm bg-cargo-orange/15 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-cargo-orange">
                In Transit
              </span>
            </div>

            <div className="py-5">
              <RouteLine origin="JAKARTA" destination="GLOBAL" />
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-paper-100/15 pt-5">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-mono text-2xl font-medium text-paper-50">
                    {s.value}
                  </p>
                  <p className="text-[11px] uppercase tracking-wide text-paper-100/60">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
