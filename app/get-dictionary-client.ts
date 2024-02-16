import type { Locale } from "./i18n-config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
/* const dictionaries = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  de: () => import("../dictionaries/de.json").then((module) => module.default),
  cs: () => import("../dictionaries/cs.json").then((module) => module.default),
  es: () => import("../dictionaries/es.json").then((module) => module.default),

}; */

const dictionaries = {
  es: {
    "server-component": {
      "welcome": "holi"
    },
    "counter": {
      "increment": "holiaaa",
      "decrement": "holiddd"
    },
    "navbar": {
      "cv": "CV",
      "proyectos": "Proyectos"
    }
  },
  en: {
    "server-component": {
      "welcome": "Welcome"
    },
    "counter": {
      "increment": "Increment",
      "decrement": "Decrement"
    },
    "navbar": {
      "cv": "Resume",
      "proyectos": "Projects"
    }
  }


}
export function getDictionaryClient(locale: Locale) {
  return dictionaries[locale] ?? dictionaries.es;
}
