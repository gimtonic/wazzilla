import { Request, Response, NextFunction } from "express";

export function getUsers(
  req: Request,
  res: Response,
  next: NextFunction
): Response | void {
  try {
    const user = {
      id: 1,
      createdAt: "2020-02-12",
      expiresAt: "2020-02-12",
    };

    return res.json(user);
  } catch (e) {
    return next(e);
  }
}
