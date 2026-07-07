"use client";

import {useLocale} from "@/lib/i18n/context";

const ExportPdfButton = () => {
  const {t} = useLocale();

  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-accent border border-border/60 hover:border-accent/50 py-2 px-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      {t.hero.exportPdf}
    </button>
  );
};

export default ExportPdfButton;
