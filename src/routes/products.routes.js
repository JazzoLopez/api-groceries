import Router from 'express';
import {getAll, getOne} from '../controllers/products.controller.js';
const router = Router();

router.get('/getAll',getAll)
router.get('/getOne/:barcode',getOne)

export default router;