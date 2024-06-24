'use strict';

const { DataTypes } = require('sequelize');
const { sequelize } = require('./db.js');
const { ProductDetails } = require('./ProductDetails.model.js');

const Product = sequelize.define(
  'Product',
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
        key: 'id'
      }
    }
  },
  {
    tableName: 'Products',
    timestamps: true,
  }
);

Product.belongsTo(ProductDetails, { foreignKey: 'productDetailsId' });

module.exports = {
  Product,
};
