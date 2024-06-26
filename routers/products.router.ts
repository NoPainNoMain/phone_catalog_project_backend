import express from "express";
import { getProducts } from "../controllers/products.controller";

const productsRouter = express.Router();

productsRouter.get("/", getProducts);

export default productsRouter;
