const purchaserServices = require('../services/purchasers.service');

const getPurchasers = (size) => new Promise((resolve, reject) => {

    try {
        let purchasers = [];
        purchasers = purchaserServices.readPurchasers()
        if(size){
          resolve(purchasers.slice(0, size));
        }else{
          resolve( purchasers );
        }
      } catch (error) {
        reject({code: 500, message: "Error unexpected", log: error });
      }
    });

    const getpurchasers = (id) => new Promise((resolve, reject) => {
        try {
          resolve( purchaserServices.readpurchaser(id) );
        } catch (error) {
          reject( error );
        }
      });

      const postPurchaser = (body) => new Promise((resolve, reject) => {
        try {
          resolve( purchaserServices.createPurchaser(body));
        } catch (error) {
          reject(error);
        }
      });

      const putPurchaser= (purchaserID, body) => new Promise((resolve, reject) => {
        try {
          resolve( purchaserServices.updatepurchaser(purchaserID, body) );
        } catch (error) {
          reject(error);
        }
      });

      const deletePurchaser = (id) => new Promise((resolve, reject) => {
        try {
          resolve( PurchaserServices.deletePurchaser(id) );
        } catch (error) {
          reject(error);
        }
      });
      //

      module.exports = {
        getPurchasers,
        getPurchaser,
        postPurchaser,
        putPurchaser,
        deletePurchaser
      }