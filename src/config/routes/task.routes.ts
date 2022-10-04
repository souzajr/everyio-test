import { Router } from 'express';

import taskController from '../../controllers/task.controller';
import authMiddleware from '../../middlewares/auth.middleware';

const taskRouters: Router = Router();

taskRouters.route('/task').all(authMiddleware).post(taskController.teste);

export default taskRouters;
