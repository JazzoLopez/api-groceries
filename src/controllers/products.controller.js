import productDao from "../dao/products.dao.js";

export const getAll = async (req, res) => {
   productDao.getAll()
   .then(result => {
    res.status(200).send(result)
   }).catch(err => {
    res.status(404).json("Error")
   })
}