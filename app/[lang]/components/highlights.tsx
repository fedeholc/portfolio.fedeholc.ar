import styles from "./highlights.module.css";
import { Locale } from "@app/i18n-config";

const DATA: Record<string, { t: string; d: string }[]> = {
  es: [
    {
      t: "Desarrollo asistido por IA",
      d: "Agentes para escribir, testear, lintear y documentar; skills que codifican los patrones del proyecto.",
    },
    {
      t: "Calidad verificable",
      d: "Type-check, lint y ~430 tests como guardrails obligatorios antes de cerrar cada tarea.",
    },
    {
      t: "Automatización con IA",
      d: "Estoy implementando un workflow que revisa Sentry, detecta issues y abre PRs con propuestas de fix.",
    },
    {
      t: "Full stack end-to-end",
      d: "React, TypeScript y Node, con Docker, CI/CD y mi propia infraestructura en un VPS.",
    },
  ],
  en: [
    {
      t: "AI-assisted development",
      d: "Agents to write, test, lint and document; skills that encode the project's patterns.",
    },
    {
      t: "Verifiable quality",
      d: "Type-check, lint and ~430 tests as mandatory guardrails before closing each task.",
    },
    {
      t: "AI automation",
      d: "I am building a workflow that reviews Sentry, detects issues and opens PRs with proposed fixes.",
    },
    {
      t: "Full stack end-to-end",
      d: "React, TypeScript and Node, with Docker, CI/CD and my own infrastructure on a VPS.",
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
