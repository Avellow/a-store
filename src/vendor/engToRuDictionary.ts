const EngToRu: Record<string, string> = {
  white: "белый",
  black: "черный",
  green: "зеленый",
  red: "красный",
  gray: "серый",
  stickerNumber: "номер стикера",
  size: "размер",
  color: "цвет",
  model: "модель",
};

export const translateToRu = (word: string): string =>
  EngToRu[word] ? EngToRu[word] : word;
