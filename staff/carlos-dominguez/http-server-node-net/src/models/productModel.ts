import { resolve } from "path";
import products from "../data/products.json";

export const Product = {
  findAll: () => {
    return new Promise((resolve, reject) => {
      resolve(products);
    });
  },
};
export default Product;
