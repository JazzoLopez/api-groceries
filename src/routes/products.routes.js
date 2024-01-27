import Router from 'express';
import {getAll} from '../controllers/products.controller.js';
const router = Router();

router.get('/getAll',getAll)

export default router;