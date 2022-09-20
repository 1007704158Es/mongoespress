const express = require("express");
const store= require('../models/store.model');
const storeSchema = require('../models/store.model');

const storeController = require('../controllers/stores.controller');

const router = express.Router();

// get all stores
router.get('/stores', (req, res) => {
    storeSchema    
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a store
router.get("/stores/:id", (req, res) => {
    const { id } = req.params;
    storeSchema    
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// create store
router.post('/stores', (req, res) => {
    const store = storeSchema(req.body);
    store
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// udatep a store
router.put("/stores/:id", (req, res) => {
    const { id } = req.params;
    const { name, address, manager } = req.body;
    storeSchema    
    .updateOne ({ _id: id}, {$set: {name,address, manager}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a store
router.delete("/stores/:id", (req, res) => {
    const { id } = req.params;    
    storeSchema    
    .remove({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;