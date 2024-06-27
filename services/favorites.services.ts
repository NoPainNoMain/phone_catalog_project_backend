import { ApiError } from "../src/errors/ApiError";
import { Favorite } from "../src/models/Favorite.model";
import { Product } from "../src/models/Product.model";

export const getFavoriteProducts = async (userId: number) => {
  const { rows } = await Product.findAndCountAll({
    include: [
      {
        model: Favorite,
        where: {
          userId,
        },
      },
    ],
  });

  return {
    data: rows,
  };
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

export default { getFavoriteProducts, addFavoriteProduct };
