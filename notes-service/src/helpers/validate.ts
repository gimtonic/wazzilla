import { validationResult } from "express-validator";
import { Request, Response } from "express";

const validation = (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(401).json({
      status: 401,
      errors: errors,
    });
  }
};
export default validation;
