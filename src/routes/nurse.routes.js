const express = require('express')
const router = express.Router()
const nurseController =   require('../controllers/nurse.controller');
// Retrieve all nurses
router.get('/', nurseController.findAll);
// Create a new nurse
router.post('/', nurseController.create);
// Retrieve a single nurse with id
router.get('/:id', nurseController.findById);
// Update a nurse with id
router.put('/:id', nurseController.update);
// Delete a nurse with id
router.delete('/:id', nurseController.delete);
module.exports = router;