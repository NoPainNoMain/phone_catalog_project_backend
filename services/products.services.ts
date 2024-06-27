import { Op, Sequelize } from "sequelize";
import { Product, ProductDetails } from "../src/models/models";
import { ApiError } from "../src/errors/ApiError";
import {
  ProductCreationAttributes,
  ProductDetailsCreationAttributes,
} from "../src/types/types";
export const getProducts = async (userId: number) => {
  return await Product.findAll({
    include: [
      {
        model: ProductDetails,
        where: {
          userId,
        },
      },
    ],
  });
};

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
