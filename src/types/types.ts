import { Model } from "sequelize";

export interface ProductAttributes {
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

export type ProductCreationAttributes = ProductAttributes;

export interface ProductDetailsAttributes {
  id: number;
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
  description: Record<string, unknown>;
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}

export type ProductDetailsCreationAttributes = ProductDetailsAttributes;

export interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
}

export type UserCreationAttributes = UserAttributes;

export interface FavoriteAttributes {}

export type FavoriteCreationAttributes = FavoriteAttributes;

export interface CartItemAttributes {
  quantity: number;
}

export type CartItemCreationAttributes = CartItemAttributes;

export interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {}

export interface FavoriteInstance
  extends Model<FavoriteAttributes, FavoriteCreationAttributes>,
    FavoriteAttributes {}

export interface CartItemInstance
  extends Model<CartItemAttributes, CartItemCreationAttributes>,
    CartItemAttributes {}
