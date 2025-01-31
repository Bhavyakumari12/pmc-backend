import { getProductsList } from "../utils.js";

export const getProducts = (req, res) => {
  try {
    const productsData = getProductsList();
    res.json(productsData);
  } catch (error) {
    res.status(400).json({ message: "cant read data" });
  }
};

