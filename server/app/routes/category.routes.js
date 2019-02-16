const express = require('express');
const router = express.Router();

const category_controller = require('../controllers/category.controller');

router.post('/create', category_controller.create);
router.get('/:id', category_controller.details);
router.put('/:id/update', category_controller.update);
router.delete('/:id/delete', category_controller.delete);

module.exports = router;