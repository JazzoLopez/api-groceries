import Router from 'express';
import {getAll, getOne, insertOne, updateOne} from '../controllers/products.controller.js';
const router = Router();

router.get('/getAll',getAll)
router.get('/getOne/:barcode',getOne)
router.post('/insertOne',insertOne)
router.put('/updateOne/:barcode',updateOne)
export default router;