const express =require('express');
const router = express.Router();

const juegoController = require('../controllers/juego');

router.get('/pruebaGET',juegoController.getPrueba);
router.post('/pruebaPOST',juegoController.postPrueba);
router.get('/descarga',juegoController.getDescarga);

module.exports = router;
