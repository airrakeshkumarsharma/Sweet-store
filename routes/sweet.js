var express = require('express');
var router = express.Router();

// add a item
router.post('/add-item', function(req, res, next) {
    const data = req.body
    console.log(data)
    return res.send("Your data is saved")
});

// Update a item
router.put('/update-item', function(req, res, next) {
    const data = req.body
    console.log(data)
    return res.send("Your data is updated")
});

// Delete a item
router.delete('/delete-item/:id', function(req, res, next) {
    const id = req.params.id
    console.log(id)
    return res.send(`Your data which item id is ${id} is deleted successfully`)
});

// Get single item
router.get('/get-items/:id', function(req, res, next) {
    const id = req.params.id
    // database
    console.log(id)
    return res.send({ name: "abahy", age: 32 })
});

// Get multiple Item
router.get('/get-items', function(req, res, next) { 
    return res.send([{ name: "abahy", age: 32 }])
});


module.exports = router;
