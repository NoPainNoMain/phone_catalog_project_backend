"use strict";

import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";
import { FavoriteAtr } from "../types/types.js";
import { User } from "./User.model.js";
import { Product } from "./Product.model.js";

const Favorite = sequelize.define<FavoriteAtr>(
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
  },
  {
    tableName: "favorites",
    timestamps: true,
  },
);

export { Favorite };
