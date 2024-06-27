import { Op, Order, Sequelize, WhereOptions } from "sequelize";
import { Product, ProductDetails } from "../src/models/models";
import { ApiError } from "../src/errors/ApiError";
import { ProductAttributes } from "../src/types/types";
import {
  ProductCreationAttributes,
  ProductDetailsCreationAttributes,
} from "../src/types/types";

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

export const getDiscountedProducts = async () => {
  return Product.findAll({
    where: {
      price: {
        [Op.lte]: Sequelize.literal('"fullPrice" - 50'),
      },
    },
  });
};

export const getNewProducts = async () => {
  return Product.findAll({
    where: {
      year: {
        [Op.gte]: 2021,
      },
    },
  });
};

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
  getProductDetails,
  createProducts,
  createDetails,
  getNewProducts,
  getDiscountedProducts,
};
