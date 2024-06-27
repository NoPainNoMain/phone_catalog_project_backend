import express from "express";
import {
  getProductDetails,
  getDiscountedProductsHandler,
  getNewProductsHandler,
  getProducts,
  getRecommendedProducts,
} from "../controllers/products.controller";

const productsRouter = express.Router();

productsRouter.get("/", getProducts);
productsRouter.get("/new", getNewProductsHandler);
productsRouter.get("/discount", getDiscountedProductsHandler);
productsRouter.get("/:id", getProductDetails);
productsRouter.get("/:id/recommended", getRecommendedProducts);

export default productsRouter;
