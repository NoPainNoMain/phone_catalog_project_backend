"use strict";

import { DataTypes } from "sequelize";
import { sequelize } from "../db";
import { Favorite } from "../types/types";

const Favorite = sequelize.define<Favorite>(
  "favorite",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
  },
  {
    tableName: "favorites",
    timestamps: true,
  },
);

export { Favorite };
