import { Order } from "sequelize";
import { Product, ProductDetails } from "../src/models/models";

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

export default {
  getProducts,
};
