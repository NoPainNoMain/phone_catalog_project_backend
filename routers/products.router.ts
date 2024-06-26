import express from "express";
import getProductsController from "../controllers/products.controller";

const productsRouter = express.Router();

productsRouter.get("/phones", getProductsController);

export default productsRouter;
