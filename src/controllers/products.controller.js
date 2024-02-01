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
      res.status(500).json({"status":"Server unaviable"})
   })
}

const insertOne = async (req, res) => {
productDao.insertOne(req.body)
.then(result => {
  if(result)
   res.status(201).json({"status":"product save"})
}).catch(err => {
   res.status(500).json({"status":"Server unaviable"})
})
}

const updateOne = async (req, res) => {
   productDao.updateOne(req.params.barcode, req.body)
   .then(result => {
      if(result){
         res.status(200).json({"status":"product update"})
      }
   })
   .catch(err => {
      res.status(500).json({"status":"Server unaviable"})
   })
}

const deleteOne = async (req, res) => {
   productDao.deleteOne(req.params.barcode)
   .then(result => {
      if(result){
         res.status(200).json({"status":"product delete"})
      }
   })
   .catch(err => {
      res.status(500).json({"status":"Server unaviable"})
   })

}

const distinct = async (req, res) => {
   productDao.distinct(req.params.field)
   .then(result => {
      res.status(200).json(result)
   })
   .catch(err => {
      res.status(500).json({"status":"Server unaviable"})
   })
}

const sortBarcode = async (req, res) => {
   productDao.sortBarcode()
   .then(result => {
      res.status(200).json(result)
   })
   .catch(err => {
      res.status(500).json({"status":"Server unaviable"})
   })
}


const reverseSortBarcode = async (req, res) => {
   productDao.reverseSortBarcode()
   .then(result => {
      res.status(200).json(result)
   })
   .catch(err => {
      res.status(500).json({"status":"Server unaviable"})
   })
}

export {getAll, getOne, insertOne, updateOne, deleteOne, distinct, sortBarcode, reverseSortBarcode} 