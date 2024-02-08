import Router from 'express';
import productController from '../controllers/products.controller.js';
const router = Router();

router.get('/getAll',productController.getAll)
router.get('/getOne/:barcode',productController.getOne)
router.post('/insertOne',productController.insertOne)
router.put('/updateOne/:barcode',productController.updateOne)
router.delete('/deleteOne/:barcode',productController.deleteOne)


export default router;  