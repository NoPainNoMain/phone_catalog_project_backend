import express from "express";
import {
  getFavoriteProducts,
  addFavoriteProduct,
} from "../controllers/favorites.controller";

const favoritesRouter = express.Router();

favoritesRouter.get("/", getFavoriteProducts);
favoritesRouter.post("/", addFavoriteProduct);

export default favoritesRouter;
