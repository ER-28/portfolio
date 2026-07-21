"use client";

import Link from "next/link";
import {useLocale} from "@/lib/i18n/context";

const Header = () => {
  const {locale, setLocale} = useLocale();

  return (
    <header className="fixed top-0 right-0 z-50 p-4 sm:p-6 flex items-center gap-3">
      <Link
        href={`/${locale}/cv`}
        className="text-xs font-mono tracking-wider text-muted-foreground hover:text-accent transition-colors duration-200"
      >
        CV
      </Link>
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as "en" | "fr" | "de" | "it" | "es")}
        className="text-xs font-mono tracking-wider bg-muted/80 backdrop-blur-sm text-muted-foreground border border-border/60 rounded-lg py-1.5 pl-3 pr-7 appearance-none cursor-pointer hover:border-accent/50 hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-accent/50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%238E8EA0' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M4 6l4 4 4-4'/%3e%3c/svg%3e")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 6px center",
          backgroundSize: "12px",
        }}
      >
        <option value="en" className="bg-[#0B0B0F]">EN</option>
        <option value="fr" className="bg-[#0B0B0F]">FR</option>
        <option value="de" className="bg-[#0B0B0F]">DE</option>
        <option value="it" className="bg-[#0B0B0F]">IT</option>
        <option value="es" className="bg-[#0B0B0F]">ES</option>
      </select>
    </header>
  );
};

export default Header;
