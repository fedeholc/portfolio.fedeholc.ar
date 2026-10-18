import styles from "./highlights.module.css";
import { Locale } from "@app/i18n-config";

const DATA: Record<string, { t: string; d: string }[]> = {
  es: [
    {
      t: "IA en producción",
      d: "LLMs (Gemini / Vertex, OpenAI / DeepSeek), búsqueda semántica con embeddings, OCR y streaming.",
    },
    {
      t: "Full stack end-to-end",
      d: "React, TypeScript y Node, con Docker, CI/CD y mi propia infraestructura en un VPS.",
    },
    {
      t: "+2000 usuarios",
      d: "Extensión publicada en la Chrome Web Store y producto propio del lado del cliente.",
    },
    {
      t: "Calidad",
      d: "~430 archivos de test, type-check y lint como guardrails del desarrollo asistido por IA.",
    },
  ],
  en: [
    {
      t: "AI in production",
      d: "LLMs (Gemini / Vertex, OpenAI / DeepSeek), semantic search with embeddings, OCR and streaming.",
    },
    {
      t: "Full stack end-to-end",
      d: "React, TypeScript and Node, with Docker, CI/CD and my own infrastructure on a VPS.",
    },
    {
      t: "+2000 users",
      d: "Extension published on the Chrome Web Store and product of my own, client side.",
    },
    {
      t: "Quality",
      d: "~430 test files, type-check and lint as guardrails for AI-assisted development.",
    },
  ],
};

export default function Highlights({ lang }: { lang: Locale }) {
  const items = DATA[lang] ?? DATA.es;
  return (
    <div className={styles.grid}>
      {items.map((item, index) => (
        <div key={index} className={styles.card}>
          <h3 className={styles.title}>{item.t}</h3>
          <p className={styles.text}>{item.d}</p>
        </div>
      ))}
    </div>
  );
}
