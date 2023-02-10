import axios from "axios";
import { CardType } from "./../types/api";

const apiUrl = "/products.json";

export const getCards = (): Promise<CardType[]> => {
  return axios.get(apiUrl).then((response) => response.data.products);
};
