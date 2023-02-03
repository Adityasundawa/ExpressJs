const express = require('express');
const router = express.Router();
const userController = require('../controller/users.js');

// CREATE - POST
router.post('/',userController.createNewUser);
router.get('/',userController.getAllUsers);
router.patch('/:id',userController.updateUsers);
router.delete('/:id',userController.deleteUsers);

module.exports = router;