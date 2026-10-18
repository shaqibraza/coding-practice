import { Router } from 'express';
import { searchProducts } from '../controller/productController.js';

const router = Router();

router.get('/products/search', searchProducts);

export default router