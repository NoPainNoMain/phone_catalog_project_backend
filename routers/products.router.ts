import express from "express";
import { getTest } from "../controllers/products.controller";

const productsRouter = express.Router();

productsRouter.get("/", getTest);

export default productsRouter;
