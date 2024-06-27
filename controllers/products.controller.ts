import { Order } from "sequelize";
import productsService from "../services/products.services";

import { RequestHandler } from "express";
import { ApiError } from "../src/errors/ApiError";

export const getProducts: RequestHandler = async (req, res, next) => {
  const { page, perPage, sortBy, category, search } = req.query;

  try {
    if (typeof category !== "string" && typeof category !== "undefined") {
      throw ApiError.badRequest("wrong category");
    }

    if (typeof search !== "string" && typeof search !== "undefined") {
      throw ApiError.badRequest("wrong category");
    }

    let limit: number;
    let offset: number;
    const order: Order = [];

    if (page && perPage) {
      limit = +perPage;
      offset = (+page - 1) * limit;
    }

    if (sortBy) {
      switch (sortBy) {
        case "newest":
          order.push(["year", "DESC"]);
          break;
        case "oldest":
          order.push(["year", "ASC"]);
          break;
        case "price-low":
          order.push(["price", "ASC"]);
          break;
        case "price-high":
          order.push(["price", "DESC"]);
          break;
        default:
      }
    }
    const products = await productsService.getProducts(
      limit,
      offset,
      order,
      category,
      search,
    );
    res.send(products);
  } catch (e) {
    next(ApiError.badRequest("wrong query params"));
  }
};

export const getProductDetails: RequestHandler = async (req, res, next) => {
  const { id } = req.params;

  console.log(id);

  try {
    const productDetails = await productsService.getProductDetails(id);

    res.send(productDetails);
  } catch (e) {
    next(e);
  }
};

export const getDiscountedProductsHandler: RequestHandler = async (
  _req,
  res,
  next,
) => {
  try {
    const discountedProducts = await productsService.getDiscountedProducts();
    res.send(discountedProducts);
  } catch (error) {
    next(error);
  }
};

export const getNewProductsHandler: RequestHandler = async (
  _req,
  res,
  next,
) => {
  try {
    const newProducts = await productsService.getNewProducts();
    res.send(newProducts);
  } catch (error) {
    next(error);
  }
};

export const getRecommendedProducts: RequestHandler = async (
  req,
  res,
  next,
) => {
  const { id } = req.params;

  try {
    const recommendedProducts =
      await productsService.getRecommendedProducts(id);
    res.send(recommendedProducts);
  } catch (error) {
    next(error);
  }
};

export default {
  getProducts,
  getDiscountedProductsHandler,
  getNewProductsHandler,
  getProductDetails,
  getRecommendedProducts,
};
