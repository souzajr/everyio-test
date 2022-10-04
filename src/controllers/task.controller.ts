import { Request, Response } from 'express';

class TaskController {
  teste(req: Request, res: Response) {
    return res.status(200).json({ message: 'teste!' });
  }
}

export default new TaskController();
