import { Product } from "../src/models/Product.model";

const getProducts = async () => {
  return Product.findAll();
};

export default getProducts;
