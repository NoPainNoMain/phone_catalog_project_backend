import { RequestHandler } from "express";
import { ApiError } from "../src/errors/ApiError.js";
import cartServices from "../services/cart.services.js";

export const getCartProducts: RequestHandler = async (req, res, next) => {
  const { userId } = req.query;

  if (!userId) {
    return next(ApiError.badRequest("User ID is required"));
  }

  try {
    const cartProducts = await cartServices.getCartProducts(+userId);
    res.send(cartProducts);
  } catch (e) {
    next(e);
  }
};

export const addCartProduct: RequestHandler = async (req, res, next) => {
  const { productId, userId } = req.body;

  if (!productId || !userId) {
    return next(ApiError.badRequest("Product ID and User ID are required"));
  }

  try {
    const cartProduct = await cartServices.addCartProduct({
      productId,
      userId,
    });
    res.status(201).send(cartProduct);
  } catch (e) {
    next(e);
  }
};

export const deleteCartProduct: RequestHandler = async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    next(ApiError.notFound("ID not found"));
    return;
  }

  await cartServices.deleteCartProduct(+id);
  res.sendStatus(204);
};

export const updateCartProduct: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const updatedCartProduct = await cartServices.updateCartProduct(+id, body);

    res.status(200).send(updatedCartProduct);
  } catch (error) {
    next(error);
  }
};
