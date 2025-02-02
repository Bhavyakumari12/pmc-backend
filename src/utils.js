import products from "./product.json" assert { type: "json" };
import template from "./template.json" assert { type: "json" };

export async function getProductsList(templateId) {
  try {
    if (templateId) return products.filter((p) => p.templateId == templateId);
    return products;
  } catch (error) {
    return [];
  }
}

export function getTemplateList() {
  try {
    return template;
  } catch (error) {
    return [];
  }
}
