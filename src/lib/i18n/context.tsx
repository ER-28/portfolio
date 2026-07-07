"use client";

import {createContext, useContext, useState, useEffect, useCallback, type ReactNode} from "react";
import {translations, defaultLocale, type Locale, type Translations} from "./translations";

type LocaleContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
  toggleLocale: () => void
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({children}: {children: ReactNode}) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale | null;
    if (stored && ["en", "fr", "de", "it", "es"].includes(stored)) {
      setLocale(stored);
    } else {
      const lang = typeof navigator !== "undefined" ? navigator.language.split("-")[0] : "en";
      const supported: Locale[] = ["en", "fr", "de", "it", "es"];
      setLocale(supported.includes(lang as Locale) ? (lang as Locale) : "en");
    }
  }, []);

  const setLocaleAndStore = useCallback((l: Locale) => {
    setLocale(l);
    localStorage.setItem("locale", l);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleAndStore(locale === "en" ? "fr" : "en");
  }, [locale, setLocaleAndStore]);

  const value: LocaleContextType = {
    locale,
    setLocale: setLocaleAndStore,
    t: translations[locale],
    toggleLocale,
  };

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
