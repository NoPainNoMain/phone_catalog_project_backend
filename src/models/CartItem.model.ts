"use strict";

import { DataTypes } from "sequelize";
import { sequelize } from "../db";
import { CartItemInstance } from "../types/types";

const CartItem = sequelize.define<CartItemInstance>(
  "CartItem",
  {
    productId: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    tableName: "CartItems",
    timestamps: true,
  },
);

export { CartItem };
