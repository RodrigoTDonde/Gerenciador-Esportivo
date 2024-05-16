const express = require('express');
const timeController = require('../controllers/timeController');
const router = express.Router();

router.post('/', timeController.createTime); // RF05
router.get('/', timeController.listTimes);  // RF06
router.get('/:id', timeController.getTime);  // RF06
router.put('/:id', timeController.updateTime); // RF07
router.delete('/:id', timeController.deleteTime); // RF08

module.exports = router;
