import { Request, Response } from 'express';
import getJwt from '../config/utils/getJwt';
import { existOrError } from '../config/utils/validations';

class AuthController {
  auth(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      existOrError(email, 'Please type your email');
      existOrError(password, 'Please type your password');
    } catch (message) {
      return res.status(400).json({ message });
    }

    const token = getJwt();

    return res.status(200).json({
      token,
    });
  }
}

export default new AuthController();
