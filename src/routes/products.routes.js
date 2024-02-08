import Router from 'express';
import {getAll, getOne, insertOne, updateOne, deleteOne, distinct, sortBarcode, reverseSortBarcode} from '../controllers/products.controller.js';
const router = Router();

router.get('/getAll',getAll)
router.get('/getOne/:barcode',getOne)
router.post('/insertOne',insertOne)
router.put('/updateOne/:barcode',updateOne)
router.delete('/deleteOne/:barcode',deleteOne)


// router.get('/distinct/:field',distinct)
// router.get('/sortBarcode',sortBarcode)
// router.get('/reverseSortBarcode',reverseSortBarcode)
export default router;  