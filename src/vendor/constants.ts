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
