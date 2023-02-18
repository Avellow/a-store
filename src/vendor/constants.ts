// картинки для главной страницы
export const leftImageUrl = "/img/frame46.jpeg";
export const rightImageUrl = "/img/frame45.jpeg";

// страница "Сделано в альфе"
export const madeInAlfaTitleText = `Сделано в\u00A0Альфе`;
export const madeInAlfaSubtitleText =
  "Хотим каждую из этих вещей! Себе, родным и\u00A0друзьям";

// страница "Свой дизайн"
export const yourDesignTitleText = "Свой дизайн";
export const yourDesignSubtitleText =
  "Выберите вещь, а затем — цвет, размер и стикер.\nПеренесём стикер на вещь как на фото";

export const makeLineBreaks = (string: string) => {
  const regexToChange = /\s/gi;

  return string.replace(regexToChange, "\n");
};

// опции для формы товара
// TODO: разнести по файлам именованные разделы, чтобы файл не разрастался
interface IColorsLib {
  [index: string]: string;
}

export const engToRusColorsLib: IColorsLib = {
  white: "белый",
  black: "черный",
  green: "зеленый",
  red: "красный",
  gray: "серый",
};

export const translateColorRu = (color: string): string =>
  engToRusColorsLib[color] || color;

const techPark =
  "Посмотреть и потрогать все стикеры можно в A-Store на Технопарке. А ещё там можно добавить сразу несколько стикеров на одну вещь.";

export const formDescription = (str: string | undefined): string | undefined =>
  str && str.replace(techPark, `\n \n ${techPark}`);

export const whiteColor = "rgb(255, 255, 255)";
export const redColor = "rgb(239, 49, 36)";
