import axios from "axios";
import { ProductType, ProductsGroup } from "../types/api";

const astoreApiUrl = "http://qa-games.ru/astore";

// ф-ция для демонстрации скелетной загрузки
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getYourDesignGroups = async (): Promise<ProductsGroup[]> => {
  const response = await axios.get<ProductsGroup[]>(
    `${astoreApiUrl}/your-design`
  );
  await delay(1500); // <--- ДЛЯ ДЕМОНАСТРАЦИИ, TODO: DELETE before prod
  return response.data;
};

export const getMadeInAlfaProducts = async (): Promise<ProductType[]> => {
  const response = await axios.get<ProductType[]>(
    `${astoreApiUrl}/made-in-alfa`
  );
  await delay(1500); // <--- ДЛЯ ДЕМОНАСТРАЦИИ, TODO: DELETE before prod
  return response.data;
};

export const getProduct = async (
  id: number
): Promise<ProductType | undefined> => {
  const response = await axios.get<ProductType>(
    `${astoreApiUrl}/product/${id}`
  );
  await delay(1500); // <--- ДЛЯ ДЕМОНАСТРАЦИИ, TODO: DELETE before prod
  return response.data;
};

export const createOrder = async () => {
  /* заглушка */
};
