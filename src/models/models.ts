import { Product } from "./Product.model";
import { ProductDetails } from "./ProductDetails.model";
import { Favorite } from "./Favorite.model";
import { CartItem } from "./CartItem.model";
import { User } from "./User.model";

ProductDetails.hasOne(Product, {
  foreignKey: { name: "itemId", allowNull: false },
});
Product.belongsTo(ProductDetails, {
  foreignKey: { name: "itemId", allowNull: false },
});

CartItem.belongsTo(Product, { foreignKey: { allowNull: false } });
Product.hasMany(CartItem, { foreignKey: { allowNull: false } });

Favorite.belongsTo(Product, { foreignKey: { allowNull: false } });
Product.hasMany(Favorite, { foreignKey: { allowNull: false } });

CartItem.belongsTo(User, { foreignKey: { allowNull: false } });
User.hasMany(CartItem, { foreignKey: { allowNull: false } });

Favorite.belongsTo(User, { foreignKey: { allowNull: false } });
User.hasMany(Favorite, { foreignKey: { allowNull: false } });

export { Product, ProductDetails, Favorite, CartItem, User };
