"use strict";

import { sequelize } from "../db";

const User = sequelize.define(
  "user",
  {},
  {
    tableName: "user",
    timestamps: true,
  },
);

export { User };
