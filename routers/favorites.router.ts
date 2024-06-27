import express from "express";
import {
  getFavoriteProducts,
  addFavoriteProduct,
  deleteFavoriteProduct,
} from "../controllers/favorites.controller";

const favoritesRouter = express.Router();

favoritesRouter.get("/", getFavoriteProducts);
favoritesRouter.post("/", addFavoriteProduct);
favoritesRouter.delete("/:id", deleteFavoriteProduct);

export default favoritesRouter;
