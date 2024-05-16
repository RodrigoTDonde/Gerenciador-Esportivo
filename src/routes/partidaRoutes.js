const express = require('express');
const partidaController = require('../controllers/partidaController');
const router = express.Router();

router.post('/', partidaController.createPartida); // RF10
router.get('/', partidaController.listPartidas);  // RF11
router.get('/:id', partidaController.getPartida);  // RF11
router.put('/:id', partidaController.updatePartida); // RF12
router.delete('/:id', partidaController.deletePartida); // RF13

module.exports = router;
