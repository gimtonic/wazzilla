import { Request, Response, NextFunction } from "express";

export function getNotes(req: Request, res: Response, next: NextFunction) {
  try {
    const user = "notes";

    return res.json(user);
  } catch (e) {
    return next(e);
  }
}
