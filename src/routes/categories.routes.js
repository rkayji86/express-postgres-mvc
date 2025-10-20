const express = require('express');
const controller = require('../controllers/category.controller');
const validate = require('../middlewares/validate');
const { createCategorySchema, updateCategorySchema } = require('../validation/category.schema');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.getById);
router.post('/', validate(createCategorySchema), controller.create);
router.put('/:id', validate(updateCategorySchema), controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
