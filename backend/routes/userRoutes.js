const express = require('express');
const { getProfile, getAllUsers, deleteUser } = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');
const router = express.Router();

router.get('/profile', auth, getProfile);
router.get('/', auth, role('admin'), getAllUsers);
router.delete('/:id', auth, role('admin'), deleteUser);

module.exports = router;