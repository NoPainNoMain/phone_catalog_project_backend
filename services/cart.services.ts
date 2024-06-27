import { ApiError } from "../src/errors/ApiError.js";
import { CartItem, Product } from "../src/models/models.js";
import { CartItemAtr } from "../src/types/types.js";

export const getCartProducts = async (userId: number) => {
  return await CartItem.findAll({
    include: Product,
    where: {
      userId,
    },
  });
};

export const addCartProduct = async ({
  productId,
  userId,
}: {
  productId: number;
  userId: number;
}) => {
  try {
    const cartProduct = await CartItem.create({ productId, userId });
    return cartProduct;
  } catch (error) {
    throw ApiError.badRequest("ProductID or userID was not found");
  }
};

export const deleteCartProduct = async (id: number) => {
  try {
    const cartProduct = await CartItem.destroy({
      where: { id },
    });
    return cartProduct;
  } catch (error) {
    throw ApiError.badRequest("ProductID or userID was not found");
  }
};

export const updateCartProduct = async (id: number, body: CartItemAtr) => {
  try {
    const updatedCartProduct = await CartItem.update(
      { ...body },
      {
        where: { id },
        returning: true,
      },
    );

    if (!updatedCartProduct) {
      throw ApiError.notFound("Cannot find product with given ID");
    }

    return updatedCartProduct[1][0];
  } catch (error) {
    throw ApiError.badRequest("Wrong data");
  }
};

export default {
  getCartProducts,
  addCartProduct,
  deleteCartProduct,
  updateCartProduct,
};
