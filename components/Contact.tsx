import { MessageCircle, Mail } from "lucide-react";
import { site } from "@/lib/data";

export default function Contact() {
  return (
    <section id="kontak" className="grain-navy text-paper-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cargo-orange">
          Hubungi Kami Sekarang!
        </p>
        <h2 className="mt-3 max-w-xl text-balance font-display text-3xl font-bold leading-tight sm:text-4xl">
          Dapatkan penawaran terbaik untuk kebutuhan logistik bisnis Anda
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={site.whatsapp}
            className="flex items-center gap-2 rounded-sm bg-cargo-orange px-5 py-3 font-mono text-xs uppercase tracking-wider text-navy-950 transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2} />
            WhatsApp Sekarang
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2 rounded-sm border border-paper-100/30 px-5 py-3 font-mono text-xs uppercase tracking-wider text-paper-50 transition-colors hover:border-cargo-orange hover:text-cargo-orange"
          >
            <Mail className="h-4 w-4" strokeWidth={2} />
            Kirim Email
          </a>
        </div>

        <div className="perforated perforated-dark mt-12 grid gap-6 border-t border-paper-100/15 pt-8 sm:grid-cols-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-paper-100/50">
              Call / WhatsApp
            </p>
            <p className="mt-1 font-mono text-sm">{site.phoneDisplay}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-paper-100/50">
              Email
            </p>
            <p className="mt-1 font-mono text-sm">{site.email}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-paper-100/50">
              Alamat
            </p>
            <p className="mt-1 font-mono text-sm">{site.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
