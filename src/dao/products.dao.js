import Product from "../models/products.model.js";
const productDao = {}
productDao.getAll = async (req, res) => {
    const products = await Product.find();
    return products;
}

productDao.getOne =  async (barcode) => {
    const product = await Product.findOne({barcode:barcode});
    return product;
}

productDao.insertOne = async(product)=>{
    const productSaved = new Product(product);
    await productSaved.save(); 
    return true;  
}

productDao.updateOne = async(barcode, product)=>{
const updateOne = await Product.findOneAndUpdate({barcode:barcode},product);
if(updateOne != null){ 
    return true;

}
else{
    return false
} 
}


productDao.deleteOne = async(barcode)=>{
const deleteOne = await Product.findOneAndDelete({barcode:barcode});
if(deleteOne != null){ 
    return true;

}
else{
    return false
} 
}

productDao.distinct = async (field) => {
    const distinct = await Product.distinct(field); //  DEVUELVE LOS CAMPOS UNICOS DE DONDE ESPECIFICAMOS
    return distinct;
}

productDao.sortBarcode = async () => {
    const sortBarcode = await Product.find().sort({barcode:1});
    return sortBarcode;
}

productDao.reverseSortBarcode = async () => {
    const sortBarcode = await Product.find().sort({barcode:-1});
    return sortBarcode;
}




export default productDao;