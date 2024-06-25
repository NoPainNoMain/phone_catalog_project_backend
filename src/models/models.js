'use strict';

const { ProductDetails } = require('./ProductDetails');
const { Product } = require('./Product.model');

ProductDetails.hasOne(Product, { foreignKey: 'productDetailsId' });
Product.belongsTo(ProductDetails, { foreignKey: 'productDetailsId' });

module.exports = {
  models: {
    ProductDetails,
    Product,
  },
};
