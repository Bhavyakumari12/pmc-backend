import { getProductsList } from "../utils.js";

export const getProducts = async (req, res) => {
  try {
    const templateId = req.query.templateId;
    const productsData = await getProductsList(templateId);
    res.json(productsData);
  } catch (error) {
    res.status(400).json({ message: "cant read data" });
  }
};

