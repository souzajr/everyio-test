import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).end();
  }

  try {
    const token = authorization.replace('Bearer', '').trim();

    jwt.verify(token, process.env.AUTH_SECRET!);

    return next();
  } catch {
    return res.status(401).end();
  }
}
