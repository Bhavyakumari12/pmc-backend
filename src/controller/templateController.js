import { getTemplateList } from "../utils.js";

export const getTemplates = async (req, res) => {
  try {
    const templatesData = getTemplateList();
    res.json(templatesData);
  } catch (error) {
    res.status(400).json({ message: "cant read data" });
  }
};

export const getTemplatesById = async (req, res) => {
  try {
    const templateId = req.params.id;
    const templatesData = getTemplateList().find(
      (template) => template.id == templateId
    );
    if (!templatesData) throw new Error("No Record Found");
    res.json(templatesData);
  } catch (error) {
    res.status(400).json({ message: "cant read data" });
  }
};
