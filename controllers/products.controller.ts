import getProducts from "../services/products.services";

const getProductsController = async (_req, res) => {
  try {
    const products = await getProducts();

    res.send(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export default getProductsController;
