import { getTemplateList, getProductsList } from "../utils.js";

export const assignProductsToTemplate = (req, res) => {
  const templatesData = getTemplateList();
  const productsData = getProductsList();

  let productIndex = 0;
  const allocatedProducts = [];

  templatesData.forEach((template) => {
    const sections = template.layout_code.split(":").map(Number);
    let sectionIndex = 0;

    sections.forEach((sectionCount) => {
      for (let i = 0; i < sectionCount; i++) {
        if (productIndex < productsData.length) {
          allocatedProducts.push({
            templateId: template.id,
            productId: productsData[productIndex].id,
            sectionNumber: sectionIndex + 1,
          });
          productIndex++;
        } else {
          allocatedProducts.push({
            templateId: template.id,
            productId: null,
            sectionNumber: sectionIndex + 1,
          });
        }
        sectionIndex++;
      }
    });
  });

  res.json(allocatedProducts);
};
