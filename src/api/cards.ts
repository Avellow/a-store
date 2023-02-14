import axios from "axios";
import { ProductType, ProductsGroup } from "./../types/api";

const apiUrl = "/products-info.json";
const groupsUrl = "/groups.json";

export const getProducts = (): Promise<ProductType[]> => {
  return axios.get(apiUrl).then((response) => response.data.products);
};

export const getCustomProducts = (): Promise<ProductType[]> => {
  return axios.get(apiUrl).then((response) => response.data.customProducts);
};

// временное решение дял заглушки без обработки ошибок
export const getProduct = async (
  id: number
): Promise<ProductType | undefined> => {
  const products = await getProducts();
  return products.find((product) => product.id === id);
};

export const getGroups = (): Promise<ProductsGroup[]> => {
  return axios.get(groupsUrl).then((response) => response.data.groups);
};

export const getCustomProduct = async (
  id: number
): Promise<ProductType | undefined> => {
  const products = await getCustomProducts();
  return products.find((product) => product.id === id);
};
