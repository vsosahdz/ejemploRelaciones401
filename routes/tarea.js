const router = require("express").Router();
const tareaController = require('../controllers/tarea');

router.post('/agregarTarea',tareaController.postAgregarTarea);

module.exports = router;