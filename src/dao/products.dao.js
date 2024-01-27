import Product from "../models/products.model.js";
const productDao = {}
productDao.getAll = async (req, res) => {
    const products = await Product.find()
    return products;
}

export default productDao;