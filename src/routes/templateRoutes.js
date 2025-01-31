import express from 'express';               
import { assignProductsToTemplate } from '../controller/templateController.js'; 

const router = express.Router();

router.get('/assign-products', assignProductsToTemplate);

export default router; 
