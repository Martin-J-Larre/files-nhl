const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers.cars');


router.post('/',controller.created);
router.get('/all',controller.list);
router.get('/:id',controller.single);
router.put('/:id',controller.updated);
router.delete('/:id',controller.deleted);


module.exports = router;