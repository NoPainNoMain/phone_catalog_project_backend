"use strict";

import { sequelize } from "../db";

const User = sequelize.define(
  "user",
  {},
  {
    tableName: "users",
    timestamps: true,
  },
);

export { User };
