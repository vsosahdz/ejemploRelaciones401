const router = require("express").Router();
const alumnoController = require('../controllers/alumno');

router.post('/agregarAlumno',alumnoController.postAgregarAlumno);
router.get('/verAlumnos',alumnoController.getAlumnos);
router.post('/eliminarAlumno',alumnoController.postEliminarAlumno);
router.post('/actualizarAlumno',alumnoController.postActualizarAlumno);

module.exports = router;