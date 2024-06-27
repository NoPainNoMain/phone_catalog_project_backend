"use strict";

import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";
import { UserAtr } from "../types/types.js";

const User = sequelize.define<UserAtr>(
  "User",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
  },
  {
    tableName: "users",
    timestamps: true,
  },
);

export { User };
