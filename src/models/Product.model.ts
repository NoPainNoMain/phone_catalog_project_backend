"use strict";

import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db";
import { ProductDetails } from "./ProductDetails.model";
import { ProductAttributes, ProductCreationAttributes } from "../types/types";

const Product = sequelize.define<Model<ProductAttributes, ProductCreationAttributes>>(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    itemId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    screen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ram: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productDetailsId: {
      type: DataTypes.INTEGER,
      references: {
        model: ProductDetails,
        key: "id",
      },
    },
  },
  {
    tableName: "Products",
    timestamps: true,
  },
);

Product.belongsTo(ProductDetails, { foreignKey: "productDetailsId" });

export { Product };
