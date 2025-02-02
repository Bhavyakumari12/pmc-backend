import express from "express";
import { getTemplates, getTemplatesById } from "../controller/templateController.js";

const router = express.Router();

router.get("/", getTemplates);
router.get("/:id", getTemplatesById);

export default router;
