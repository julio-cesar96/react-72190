import { products } from "../mock/products";

export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1500); // simula um tempo de carregamento (ex: chamada à API)
    });
  };