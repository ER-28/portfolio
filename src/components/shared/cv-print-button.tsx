"use client";

const labels: Record<string, string> = {
  en: "Download PDF",
  fr: "Télécharger le PDF",
  de: "PDF herunterladen",
  it: "Scarica PDF",
  es: "Descargar PDF",
};

const CvPrintButton = ({locale}: {locale: string}) => (
  <button
    onClick={() => window.print()}
    style={{background: "#111", color: "#fff", border: "none", padding: "8px 20px", borderRadius: "6px", fontSize: "13px", cursor: "pointer"}}
  >
    {labels[locale] ?? labels.en}
  </button>
);

export default CvPrintButton;
