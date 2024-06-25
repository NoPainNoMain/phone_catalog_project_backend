'use strict';

import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';
import { Product } from './Product.model';
import { ProductDetailsAttributes, ProductDetailsCreationAttributes } from '../types/types';

const ProductDetails = sequelize.define<Model<ProductDetailsAttributes, ProductDetailsCreationAttributes>>(
  'ProductDetails',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    namespaceId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacityAvailable: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    capacity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    priceRegular: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    priceDiscount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    colorsAvailable: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    description: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    screen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resolution: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    processor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ram: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cell: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
  },
  {
    tableName: 'ProductDetails',
    timestamps: true,
  }
);

ProductDetails.hasOne(Product, { foreignKey: 'productDetailsId' });

export { ProductDetails };
