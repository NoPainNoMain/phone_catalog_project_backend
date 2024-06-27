import { ApiError } from "../src/errors/ApiError";
import { CartItem } from "../src/models/CartItem.model";
import { Product } from "../src/models/Product.model";
import { CartItemAttributes } from "../src/types/types";

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

export const updateCartProduct = async (
  id: number,
  body: CartItemAttributes,
) => {
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
