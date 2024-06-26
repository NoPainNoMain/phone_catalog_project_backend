import { Order } from "sequelize";
import { Product, ProductDetails } from "../src/models/models";
import { ApiError } from "../src/errors/ApiError";

export async function getProducts(
  limit?: number,
  offset?: number,
  order?: Order,
) {
  return Product.findAll({
    limit,
    offset,
    order,
  });
}

export async function getProductDetails(id: string) {
  const details = await ProductDetails.findByPk(id, {
    include: Product,
  });

  if (!details) {
    throw ApiError.notFound("no product with this id");
  }

  return details;
}

export default {
  getProducts,
  getProductDetails,
};
