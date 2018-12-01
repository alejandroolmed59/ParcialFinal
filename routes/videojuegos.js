var express = require('express');
var router = express.Router();
var videojuegoC= require('../controller/videoJuegoController');

/* GET users listing. */
router.get('/', videojuegoC.getAll);

router.post('/', videojuegoC.registrar);

router.get('/:id', videojuegoC.buscarporId);

router.put('/:id', videojuegoC.actualizar);

router.delete('/:id', videojuegoC.deletear);

module.exports = router;
