const purchaserSchema = require('../models/purchaser.model');

const readPurchasers = () => new Promise((resolve, reject) => {
    purchaserSchema.find()
      .then((purchasers) => resolve( purchasers ))
      .catch((error) => reject({code: 500, message: error}))
  });

  const readPurchaser = (id) => new Promise((resolve , reject) => {
    purchaserSchema.findById(id)
      .then((purchaser) => resolve(purchaser))
      .catch((error) => reject({code: 500, message: error}) );
  });

  const createPurchaser = (purchaser) => new Promise((resolve, reject) => {
    const purchaserDB = purchaserSchema(user);
    purchaserDB.save()
      .then(() => resolve({code: 201, message: "Purchaser created successfully"}) )
      .catch((error) => reject({code: 500, message: error}) );
  });

  const updatePurchaser = (id, purchaser) => new Promise((resolve , reject) => {
    purchaserSchema.findByIdAndUpdate(id, purchaser)
      .then(() => resolve({code: 201, message: "Purchaser updated successfully"}) )
      .catch((error) => reject({code: 500, message: error}) );
  });

  const deletePurchaser = (id) => new Promise((resolve , reject) => {
    purchaserSchema.findByIdAndDelete(id)
      .then(() => resolve({code: 200, message: "Purchaser deleted successfully"}) )
      .catch((error) => reject({code: 500, message: error}) );
      
  });
  

  module.exports = {
    readPurchasers,
    readPurchaser,
    createPurchaser,
    updatePurchaser,
    deletePurchaser
  }