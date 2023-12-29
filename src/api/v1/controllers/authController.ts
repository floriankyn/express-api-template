import { Response } from 'express';
import { AuthenticatedRequest } from '../types/controllers';

export const get = (req: AuthenticatedRequest, res: Response): Response => {
  const token = req.token;

  return res.status(200).send({
    message: 'You successfully generated a token!',
    token: token,
  });
};