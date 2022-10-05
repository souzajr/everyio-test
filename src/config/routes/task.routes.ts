import { Router } from 'express';

import taskController from '../../controllers/task.controller';
import authMiddleware from '../../middlewares/auth.middleware';

const taskRouters: Router = Router();

taskRouters.route('/task').all(authMiddleware).get(taskController.getAll);

taskRouters
  .route('/task/:id')
  .all(authMiddleware)
  .put(taskController.changeTaskStatus);

export default taskRouters;
