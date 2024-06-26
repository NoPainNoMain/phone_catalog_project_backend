import express from "express";
import {
  getProductDetails,
  getProducts,
} from "../controllers/products.controller";

const productsRouter = express.Router();

productsRouter.get("/:id", getProductDetails);
productsRouter.get("/", getProducts);

export default productsRouter;
