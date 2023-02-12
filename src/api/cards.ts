import axios from "axios";
import { ProductType, ProductsGroup } from "./../types/api";

const apiUrl = "/products.json";
const groupsUrl = "/groups.json";

export const getProducts = (): Promise<ProductType[]> => {
  return axios.get(apiUrl).then((response) => response.data.products);
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

export const getGroupProduct = async (
  id: number
): Promise<ProductType | undefined> => {
  const groups = await getGroups();
  let product;
  for (let group of groups) {
    product = group.products.find((p) => p.id === id);
    if (product) break;
  }
  return product;
};
