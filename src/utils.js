import products from "./product.json" assert { type: "json" };
import template from "./template.json" assert { type: "json" };

export function getProductsList() {
  try {
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
