import Image from "next/image";
import { clients } from "@/lib/data";

export default function Clients() {
  return (
    <section id="klien" className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-cargo-orange-dark">
        Dipercaya Oleh Klien Terkemuka
      </p>
      <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
        {clients.map((c) => (
          <div
            key={c.name}
            className="flex aspect-[3/2] items-center justify-center rounded-sm border border-line-light bg-paper-50 p-4 grayscale transition-all hover:grayscale-0"
          >
            <div className="relative h-12 w-28">
              <Image
                src={c.src}
                alt={`Logo klien ${c.name} - partner logistik AJ Trans`}
                fill
                sizes="112px"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
