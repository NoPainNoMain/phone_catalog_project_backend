import { Order } from "sequelize";
import { Product, ProductDetails } from "../src/models/models";
import {
  ProductCreationAttributes,
  ProductDetailsCreationAttributes,
} from "../src/types/types";

export async function getProducts(
  limit?: number,
  offset?: number,
  order?: Order,
) {
  return Product.findAll({
    include: ProductDetails,
    limit,
    offset,
    order,
  });
}

export const createProducts = async (products: ProductCreationAttributes[]) => {
  return Product.bulkCreate(products);
};

export const createDetails = async (
  details: ProductDetailsCreationAttributes[],
) => {
  return ProductDetails.bulkCreate(details);
};

export default {
  getProducts,
  createProducts,
  createDetails,
};
