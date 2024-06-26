"use strict";

import { DataTypes } from "sequelize";
import { sequelize } from "../db";
import { FavoriteInstance } from "../types/types";

const Favorite = sequelize.define<FavoriteInstance>(
  "Favorite",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
    },
    productId: {
      type: DataTypes.STRING,
      references: {
        model: "Products",
        key: "id",
      },
    },
  },
  {
    tableName: "Favorites",
    timestamps: true,
  },
);

export { Favorite };
