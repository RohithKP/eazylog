const express = require('express');
const router = express.Router();

const business_controller = require('../controllers/business.controller');

router.post('/create', business_controller.create);
router.get('', business_controller.getAll);
router.get('/:id', business_controller.details);
router.put('/:id', business_controller.update);
router.delete('/:id', business_controller.delete);

module.exports = router;