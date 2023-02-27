export const symbolLengthError = (
  type: "min" | "max",
  length: number
): string => {
  if (type === "max" && length > 0) {
    return `Достигнуто максимальное количество символов (${length})`;
  }
  if (type === "min" && length > 0) {
    return `Введите минимальное количество символов (${length})`;
  }
  throw new Error("Длина должна быть больше 0");
};

export const emailError = "Введите валидный e-mail";

export const mustBeFilled = "Заполните это поле";

export const phoneNumberError = "Проверьте номер на корректность";

export const paymentMethodError = "Выберите способ оплаты";

export const deliveryTypeError = "Выберите способ получения заказа";
