import express from "express";
import {
  getDiscountedProductsHandler,
  getNewProductsHandler,
  getProducts,
} from "../controllers/products.controller";

const productsRouter = express.Router();

productsRouter.get("/", getProducts);
productsRouter.get("/new", getNewProductsHandler);
productsRouter.get("/discount", getDiscountedProductsHandler);

export default productsRouter;
