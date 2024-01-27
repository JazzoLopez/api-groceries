import productDao from "../dao/products.dao.js";

const getAll = async (req, res) => {
   productDao.getAll()
   //PROMESA
   .then(result => {
    res.status(200).send(result)
   }).catch(err => {
    res.status(404).json("Error")
   })
}

const getOne = async (req, res) => {
   productDao.getOne(req.params.barcode)
   .then(result => {
      if(result!= null){
      res.json(result)
   }
   else{
      res.json({
         "status":"not found"
      })
   }
   })
   .catch(err => {
      console.log(err.msg)
      res.json({"status":"Servidor no disponible"})
   })
}

export {getAll, getOne}