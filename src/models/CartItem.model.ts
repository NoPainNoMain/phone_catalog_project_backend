"use strict";

import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";
import { CartItemAtr } from "../types/types.js";
import { User } from "./User.model.js";
import { Product } from "./Product.model.js";

const CartItem = sequelize.define<CartItemAtr>(
  "cartItem",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    tableName: "cart_items",
    timestamps: true,
  },
);

export { CartItem };
