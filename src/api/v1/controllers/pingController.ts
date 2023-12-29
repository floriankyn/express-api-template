import { Request, Response } from 'express';

export const get = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({
    message: 'Get pong',
  });
};

export const post = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({
    message: 'Post pong',
  });
};

export const del = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({
    message: 'Delete pong',
  });
};

export const put = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({
    message: 'Put pong',
  });
};