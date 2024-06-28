import { ApiError } from "../src/errors/ApiError.js";
import { Favorite, Product } from "../src/models/models.js";

export const getFavoriteProducts = async (userId: number) => {
  return Favorite.findAll({
    include: Product,
    where: {
      userId,
    },
  });
};

export const addFavoriteProduct = async ({
  productId,
  userId,
}: {
  productId: number;
  userId: number;
}) => {
  try {
    const favoriteProduct = await Favorite.create({ productId, userId });
    return favoriteProduct;
  } catch (error) {
    throw ApiError.badRequest("ProductID or userID was not found");
  }
};

export const deleteFavoriteProduct = async (id: number) => {
  try {
    const favoriteProduct = await Favorite.destroy({
      where: { id },
    });
    return favoriteProduct;
  } catch (error) {
    throw ApiError.badRequest("ProductID or userID was not found");
  }
};

export default {
  getFavoriteProducts,
  addFavoriteProduct,
  deleteFavoriteProduct,
};
