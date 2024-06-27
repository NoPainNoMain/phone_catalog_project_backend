"use strict";

import { DataTypes } from "sequelize";
import { sequelize } from "../db";
import { User } from "../types/types";

const User = sequelize.define<User>(
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
