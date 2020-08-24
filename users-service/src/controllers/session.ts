import { Request, Response, NextFunction } from "express";

export async function getSessions(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user = "sessions";

    return res.json(user);
  } catch (e) {
    return next(e);
  }
}
