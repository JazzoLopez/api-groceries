import productDao from "../dao/products.dao.js";

export const getAll = async (req, res) => {
   productDao.getAll()
   .then(result => {
    res.json(result)
   }).catch(err => {
    res.json("Error")
   })
}