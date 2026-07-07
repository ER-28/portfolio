"use client";

import {useLocale} from "@/lib/i18n/context";

const LanguageSwitcher = () => {
  const {locale, toggleLocale} = useLocale();

  return (
    <button
      onClick={toggleLocale}
      className="text-xs text-muted-foreground hover:text-accent border border-border/60 hover:border-accent/50 py-1.5 px-3 rounded-lg transition-all duration-300 font-mono tracking-wider shrink-0"
      aria-label={`Switch to ${locale === "en" ? "French" : "English"}`}
    >
      {locale === "en" ? "FR" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
