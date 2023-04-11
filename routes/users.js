const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/signout', userController.signOut);
router.delete('/:id', userController.deleteUser);
router.put('/:id', userController.updateUser);
router.get('/search/:searchTerm', userController.searchUsers);
router.get('/:id', userController.getUserById);


module.exports = router;

