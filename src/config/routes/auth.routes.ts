import { Router } from 'express';

import authController from '../../controllers/auth.controller';

const authRouters: Router = Router();

authRouters.route('/auth').post(authController.auth);

export default authRouters;
