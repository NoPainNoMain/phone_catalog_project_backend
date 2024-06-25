export interface ProductAttributes {
  id: number;
  category: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
  productDetailsId: number;
}

export type ProductCreationAttributes = Omit<ProductAttributes, 'id'>;

export interface ProductDetailsAttributes {
  id: number;
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
  cell: string[];
}

export type ProductDetailsCreationAttributes = Omit<ProductDetailsAttributes, 'id'>;
