import { Router } from 'express';

import authRouters from './auth.routes';
import taskRouters from './task.routes';

const router: Router = Router();

router.use(authRouters);
router.use(taskRouters);

export default router;
