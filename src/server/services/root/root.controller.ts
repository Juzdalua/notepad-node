import { NextFunction, Request, Response } from 'express';

const rootController = {
  home: async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> => {
    if (true) {
      return res.status(200).json({
        success: false,
        message: 'home',
        data: {},
      });
    }
    return res.status(200).json({
      success: true,
      message: 'home',
      data: {},
    });
  },
};

export default rootController;
