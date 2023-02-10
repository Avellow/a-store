import axios from "axios";
import { CardType, ProductsGroup } from "./../types/api";

const apiUrl = "/products.json";
const groupsUrl = "/groups.json";

export const getCards = (): Promise<CardType[]> => {
  return axios.get(apiUrl).then((response) => response.data.products);
};

export const getGroups = (): Promise<ProductsGroup[]> => {
  return axios.get(groupsUrl).then((response) => response.data.groups);
};
