import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
} from "sequelize";

export interface ProductAtr
  extends Model<
    InferAttributes<ProductAtr>,
    InferCreationAttributes<ProductAtr>
  > {
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

export interface ProductDetailsAtr
  extends Model<
    InferAttributes<ProductDetailsAtr>,
    InferCreationAttributes<ProductDetailsAtr>
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
  product: NonAttribute<ProductAtr>;
}

export interface UserAtr
  extends Model<InferAttributes<UserAtr>, InferCreationAttributes<UserAtr>> {
  id: CreationOptional<number>;
}

export interface FavoriteAtr
  extends Model<
    InferAttributes<FavoriteAtr>,
    InferCreationAttributes<FavoriteAtr>
  > {
  id: CreationOptional<number>;
  userId: number;
  productId: number;
  product: NonAttribute<ProductAtr>;
}

export interface CartItemAtr
  extends Model<
    InferAttributes<CartItemAtr>,
    InferCreationAttributes<CartItemAtr>
  > {
  quantity: CreationOptional<number>;
  id: CreationOptional<number>;
  userId: number;
  productId: number;
  product: NonAttribute<ProductAtr>;
}
