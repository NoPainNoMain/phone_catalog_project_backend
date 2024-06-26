"use strict";

import { DataTypes } from "sequelize";
import { sequelize } from "../db";
import { CartItemInstance } from "../types/types";

const CartItem = sequelize.define<CartItemInstance>(
  "cartItem",
  {
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
