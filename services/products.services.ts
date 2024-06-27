import { Op, Order, WhereOptions } from "sequelize";
import { Product, ProductDetails } from "../src/models/models";
import { ApiError } from "../src/errors/ApiError";
import { ProductAttributes } from "../src/types/types";

export async function getProducts(
  limit?: number,
  offset?: number,
  order?: Order,
  category?: string,
  name?: string,
) {
  const where: WhereOptions<ProductAttributes> = {};
  if (category) {
    where.category = category;
  }

  if (name) {
    where.name = {
      [Op.iLike]: `%${name.toLowerCase()}%`,
    };
  }

  const { rows, count } = await Product.findAndCountAll({
    where,
    limit,
    offset,
    order,
  });

  const totalPages = limit ? Math.ceil(count / limit) : 1;
  const currentPage = limit && offset !== undefined ? offset / limit + 1 : 1;

  return {
    data: rows,
    pagination: {
      totalRecords: count,
      totalPages,
      currentPage,
    },
  };
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
