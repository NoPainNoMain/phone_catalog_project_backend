"use strict";

import { DataTypes } from "sequelize";
import { sequelize } from "../db";
import { CartItem } from "../types/types";

const CartItem = sequelize.define<CartItem>(
  "CartItem",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Product",
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
