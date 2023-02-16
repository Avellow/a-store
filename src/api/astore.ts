import axios from "axios";
import { ProductType, ProductsGroup } from "../types/api";

const astoreApiUrl = "http://qa-games.ru/astore";

export const getYourDesignGroups = async (): Promise<ProductsGroup[]> => {
  const response = await axios.get<ProductsGroup[]>(
    `${astoreApiUrl}/your-design`
  );
  return response.data;
};

export const getMadeInAlfaProducts = async (): Promise<ProductType[]> => {
  const response = await axios.get<ProductType[]>(
    `${astoreApiUrl}/made-in-alfa`
  );
  return response.data;
};

export const getProduct = async (
  id: number
): Promise<ProductType | undefined> => {
  const response = await axios.get<ProductType>(
    `${astoreApiUrl}/product/${id}`
  );
  return response.data;
};

export const createOrder = async () => {
  /* заглушка */
};
