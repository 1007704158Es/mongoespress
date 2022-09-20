const storeSchema = require('../models/store.model');

const readStores = () => new Promise((resolve, reject) => {
    storeSchema.find()
    .then((stores) => resolve( stores))
    .catch((error) => reject({code: 500, message: error}))
});

const readStore = (id) => new Promise((resolve , reject) => {
    storeSchema.findById(id)
      .then((store) => resolve(store))
      .catch((error) => reject({code: 500, message: error}) );
  });

  const createStore = (store) => new Promise((resolve, reject) => {
    const storeDB = storeSchema(store);
    storeDB.save()
      .then(() => resolve({code: 201, message: "store created successfully"}) )
      .catch((error) => reject({code: 500, message: error}) );
  });

  const updateStore = (id, store) => new Promise((resolve , reject) => {
    storeSchema.findByIdAndUpdate(id, store)
      .then(() => resolve({code: 201, message: "store updated successfully"}) )
      .catch((error) => reject({code: 500, message: error}) );
  });

  const deleteStore  = (id) => new Promise((resolve , reject) => {
    storeSchema.findByIdAndDelete(id)
      .then(() => resolve({code: 200, message: "store  deleted successfully"}) )
      .catch((error) => reject({code: 500, message: error}) );
  });

  module.exports = {
    readStores,
    readStore,
    createStore,
    updateStore,
    deleteStore
  }