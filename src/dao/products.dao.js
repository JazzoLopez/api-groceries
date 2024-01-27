import Product from "../models/products.model.js";
const productDao = {}
productDao.getAll = async (req, res) => {
    const products = await Product.find()
    return products;
}

productDao.getOne =  async (barcode) => {
    const product = await Product.findOne({barcode:barcode});
    return product;
}

export default productDao;