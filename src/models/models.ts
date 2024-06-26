import { Product } from "./Product.model";
import { ProductDetails } from "./ProductDetails.model";
import { Favorite } from "./Favorite.model";
import { CartItem } from "./CartItem.model";

ProductDetails.hasOne(Product, { foreignKey: "itemId" });
Product.belongsTo(ProductDetails, { foreignKey: "itemId" });

CartItem.belongsTo(Product, { foreignKey: "productId" });
Product.hasMany(CartItem, { foreignKey: "productId" });

export { Product, ProductDetails, Favorite, CartItem };
