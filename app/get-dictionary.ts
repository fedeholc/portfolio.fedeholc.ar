import "server-only";

const dictionaries = import("../dictionaries/es.json").then((module) => module.default);

export const getDictionary = async () => dictionaries;
