import { MessageCircle } from "lucide-react";
import { navLinks, site } from "@/lib/data";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 grain-navy text-paper-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-display font-bold tracking-tight">
          <img src="/logo.png" alt="" className="h-10 w-auto" />
          <span className="text-lg text-paper-50">{site.name}</span>
        </a>
        <ul className="hidden items-center gap-8 font-mono text-xs uppercase tracking-wider text-paper-100/80 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-cargo-orange">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={site.whatsapp}
          className="flex items-center gap-1.5 rounded-sm border border-cargo-orange px-4 py-2 font-mono text-xs uppercase tracking-wider text-cargo-orange transition-colors hover:bg-cargo-orange hover:text-navy-950"
        >
          <MessageCircle className="h-3.5 w-3.5" strokeWidth={2} />
          WhatsApp
        </a>
      </nav>
    </header>
  );
}
