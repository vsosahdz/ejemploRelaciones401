const express =require('express');
const router = express.Router();

const juegoController = require('../controllers/juego');

router.get('/pruebaGET',juegoController.getPrueba);
router.post('/pruebaPOST',juegoController.postPrueba);

module.exports = router;
