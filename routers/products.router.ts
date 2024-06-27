import express from "express";
import {
  getProductDetails,
  getDiscountedProductsHandler,
  getNewProductsHandler,
  getProducts,
} from "../controllers/products.controller";

const productsRouter = express.Router();

productsRouter.get("/", getProducts);
productsRouter.get("/new", getNewProductsHandler);
productsRouter.get("/discount", getDiscountedProductsHandler);
productsRouter.get("/:id", getProductDetails);

export default productsRouter;
