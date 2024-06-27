"use strict";

import { DataTypes } from "sequelize";
import { sequelize } from "../db";
import { UserAtr } from "../types/types";

const User = sequelize.define<UserAtr>(
  "user",
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
