import express from "express";
import {
  getCartProducts,
  addCartProduct,
  deleteCartProduct,
  updateCartProduct,
} from "../controllers/cart.controller.js";

const cartRouter = express.Router();

cartRouter.get("/", getCartProducts);
cartRouter.post("/", addCartProduct);
cartRouter.delete("/:id", deleteCartProduct);
cartRouter.put("/:id", updateCartProduct);

export default cartRouter;
