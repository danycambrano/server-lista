import routerx from 'express-promise-router';
import estudianteController from '../controllers/estudiante.controller';

const router=routerx();


router.post('/agregar', estudianteController.AddEstudiante);
router.get('/listar',estudianteController.ListEstudiantes);
router.delete('/eliminar/:id',estudianteController.DelEstudiante);
router.put('/actualizar/:id', estudianteController.UpEstudiante);
router.get('/listarone/:id',estudianteController.OneEstudiante);

export default router;