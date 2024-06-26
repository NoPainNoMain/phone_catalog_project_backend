"use strict";

import { sequelize } from "../db";
import { FavoriteInstance } from "../types/types";

const Favorite = sequelize.define<FavoriteInstance>(
  "favorite",
  {},
  {
    tableName: "favorites",
    timestamps: true,
  },
);

export { Favorite };
