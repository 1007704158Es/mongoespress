const express = require("express");
const purchaser = require('../models/purchaser.model');
const purchaserSchema = require('../models/purchaser.model');

const userController = require('../controllers/purchasers.controller');

const router = express.Router();

// get all purchasers
router.get('/purchasers', (req, res) => {
    purchaserSchema    
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a  purchaser
router.get("/ purchasers/:id", (req, res) => {
    const { id } = req.params;
    purchaserSchema    
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// create purchaser
router.post('/purchasers', (req, res) => {
    const purchaser = purchaserSchema(req.body);
    purchaser
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// udatep a purchaser
router.put("/purchasers/:id", (req, res) => {
    const { id } = req.params;
    const { document, aphone, email } = req.body;
    purchaserSchema    
    .updateOne({ _id: id}, {$set: {document, phone, email}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a purchaser
router.delete("/purchasers/:id", (req, res) => {
    const { id } = req.params;    
    purchaserSchema    
    .remove({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;