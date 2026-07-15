import { Target, Eye } from "lucide-react";
import { modes, site } from "@/lib/data";
import { Icon } from "@/lib/icons";

export default function About() {
  return (
    <section id="tentang" className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-cargo-orange-dark">
        Tentang Kami
      </p>
      <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
        Kami adalah mitra logistik yang Anda percaya
      </h2>
      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-500">
        <strong className="text-ink-900">{site.name}</strong>, terdaftar
        secara legal sebagai <strong className="text-ink-900">{site.legalName}</strong>,
        adalah perusahaan freight forwarding skala global yang berfokus
        menghadirkan layanan terbaik di industri ini. Kami mengkhususkan diri
        dalam menciptakan solusi logistik yang seamless, efisien, dan andal —
        dirancang khusus untuk memenuhi kebutuhan bisnis Anda, dari skala
        kecil hingga korporat multinasional.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-line-light bg-line-light sm:grid-cols-4">
        {modes.map((m) => (
          <div key={m.code} className="bg-paper-50 p-5">
            <Icon name={m.icon} className="h-6 w-6 text-cargo-orange-dark" />
            <p className="mt-3 font-display text-sm font-semibold text-ink-900">
              {m.title}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              {m.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-px overflow-hidden rounded-sm border border-line-light bg-line-light sm:grid-cols-2">
        <div className="bg-paper-50 p-6">
          <Target className="h-5 w-5 text-cargo-orange-dark" strokeWidth={1.75} />
          <p className="mt-2 font-display text-sm font-semibold uppercase tracking-wide text-ink-900">
            Our Mission
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Menyederhanakan logistik dengan menghadirkan layanan transportasi
            yang inovatif, terjangkau, dan andal — disesuaikan dengan
            kebutuhan bisnis Anda. Kami berkomitmen untuk memberikan nilai
            lebih di setiap pengiriman.
          </p>
        </div>
        <div className="bg-paper-50 p-6">
          <Eye className="h-5 w-5 text-cargo-orange-dark" strokeWidth={1.75} />
          <p className="mt-2 font-display text-sm font-semibold uppercase tracking-wide text-ink-900">
            Our Vision
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Menjadi mitra logistik terdepan yang menghadirkan layanan lebih
            cepat, lebih cerdas, dan lebih aman — memberdayakan bisnis Anda
            untuk beroperasi tanpa batas, menjangkau pasar lokal maupun
            global.
          </p>
        </div>
      </div>
    </section>
  );
}
