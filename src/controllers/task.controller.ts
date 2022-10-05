import fs from 'fs';
import { Request, Response } from 'express';
import { checkType, existOrError } from '../config/utils/validations';
import mockedDb from '../config/database/mockedDB.json';

class TaskController {
  getAll(req: Request, res: Response) {
    return res.status(200).json({ ...mockedDb });
  }

  changeTaskStatus(req: Request, res: Response) {
    const { id } = req.params;
    const { status } = req.body;

    try {
      existOrError(id, 'Select task id');
      existOrError(status, 'Select task status');
      checkType(status, 'Wrong status');
    } catch (message) {
      return res.status(400).json({ message });
    }

    const index = mockedDb.tasks.findIndex(task => task.id === +id);

    if (index < 0) {
      return res.status(404).json({ message: 'Task not found' });
    }

    mockedDb.tasks[index].status = status;

    fs.writeFileSync(
      './src/config/database/mockedDB.json',
      JSON.stringify(mockedDb, null, 2)
    );

    return res.status(200).json({ ...mockedDb });
  }
}

export default new TaskController();
