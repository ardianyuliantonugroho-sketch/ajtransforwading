import { Mail } from "lucide-react";
import { site } from "@/lib/data";

const socials = [
  { Icon: Mail, label: "Mail" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 py-8 text-paper-100/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-mono text-xs">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
        <div className="flex gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href="mailto:arenajayatransport@gmail.com"
              aria-label={s.label}
              className="transition-colors hover:text-cargo-orange"
            >
              <s.Icon className="h-4 w-4" strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
