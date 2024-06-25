'use strict';

import { ProductDetails } from './ProductDetails.model';
import { Product } from './Product.model';

ProductDetails.hasOne(Product, { foreignKey: 'itemId' });
Product.belongsTo(ProductDetails, { foreignKey: 'itemId' });

export {
  ProductDetails,
  Product,
};
