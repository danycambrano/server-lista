import routerx from 'express-promise-router';
import estudianteRouter from './estudiante.routes';


const router=routerx();

router.use('/estudiante',estudianteRouter);

export default router;