const express = require('express');
const sweetController = require("../contrlollers/controllers").sweetController


const router = express.Router();

// add a item
router.post('/add-item', sweetController.add);

// Update a item
router.put('/update-item', sweetController.update);

// Delete a item
router.delete('/delete-item/:id', sweetController.delete)

// Get single item
router.get('/get-items/:id', sweetController.getOne)

// Get multiple Item
router.get('/get-items', sweetController.getMany)


module.exports = router;
