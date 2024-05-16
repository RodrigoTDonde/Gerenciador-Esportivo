const express = require('express');
const jogadorController = require('../controllers/jogadorController');
const router = express.Router();

router.post('/', jogadorController.createJogador); // RF01
router.get('/', jogadorController.listJogadores);  // RF02
router.get('/:id', jogadorController.getJogador);  // RF02
router.put('/:id', jogadorController.updateJogador); // RF03
router.delete('/:id', jogadorController.deleteJogador); // RF04

module.exports = router;
