'use strict';

import { ProductDetails } from './ProductDetails.model';
import { Product } from './Product.model';

ProductDetails.hasOne(Product, { foreignKey: 'productDetailsId' });
Product.belongsTo(ProductDetails, { foreignKey: 'productDetailsId' });

export {
  ProductDetails,
  Product,
};
