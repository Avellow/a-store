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
const techPark =
  "Посмотреть и потрогать все стикеры можно в A-Store на Технопарке. А ещё там можно добавить сразу несколько стикеров на одну вещь.";

export const formDescription = (str: string | undefined): string | undefined =>
  str && str.replace(techPark, `\n \n ${techPark}`);

export const whiteColor = "rgb(255, 255, 255)";
export const redColor = "rgb(239, 49, 36)";

// преобразует слово из множественного числа в единственное
export function singularize(word: string): string {
  const endings: { [index: string]: string } = {
    ves: "fe",
    ies: "y",
    i: "us",
    zes: "ze",
    ses: "s",
    es: "e",
    s: "",
  };
  return word.replace(
    new RegExp(`(${Object.keys(endings).join("|")})$`),
    (r) => endings[r]
  );
}
