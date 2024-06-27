import { RequestHandler } from "express";
import { ApiError } from "../src/errors/ApiError";
import favoritesServices from "../services/favorites.services";

export const getFavoriteProducts: RequestHandler = async (req, res, next) => {
  const { userId } = req.query;

  if (!userId) {
    return next(ApiError.badRequest("User ID is required"));
  }

  try {
    const favoriteProducts =
      await favoritesServices.getFavoriteProducts(+userId);
    res.send(favoriteProducts);
  } catch (e) {
    next(e);
  }
};

export const addFavoriteProduct: RequestHandler = async (req, res, next) => {
  const { productId, userId } = req.body;

  if (!productId || !userId) {
    return next(ApiError.badRequest("Product ID and User ID are required"));
  }

  try {
    const favoriteProduct = await favoritesServices.addFavoriteProduct({
      productId,
      userId,
    });
    res.status(201).send(favoriteProduct);
  } catch (e) {
    next(e);
  }
};
