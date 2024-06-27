import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
} from "sequelize";

export interface Product
  extends Model<InferAttributes<Product>, InferCreationAttributes<Product>> {
  id: CreationOptional<number>;
  itemId: CreationOptional<string>;
  category: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
}

export interface ProductDetails
  extends Model<
    InferAttributes<ProductDetails>,
    InferCreationAttributes<ProductDetails>
  > {
  id: string;
  category: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: Array<unknown>;
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
  product: NonAttribute<Product>;
}

export interface User
  extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  id: CreationOptional<number>;
}

export interface Favorite
  extends Model<InferAttributes<Favorite>, InferCreationAttributes<Favorite>> {
  id: CreationOptional<number>;
  userId: number;
  productId: number;
  product: NonAttribute<Product>;
}

export interface CartItem
  extends Model<InferAttributes<CartItem>, InferCreationAttributes<CartItem>> {
  quantity: CreationOptional<number>;
  id: CreationOptional<number>;
  userId: number;
  productId: number;
  product: NonAttribute<Product>;
}
