const router = require("express").Router();
const grupoAlumnoController = require('../controllers/grupoAlumno');

router.post('/agregarGrupoAlumno',grupoAlumnoController.postAgregarGrupoAlumno);

module.exports = router;