import { Request, Response, NextFunction } from "express";
import * as UserService from "@services/user";

export async function registerUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response<any>> {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new Error("Invalid body"));
  }
  try {
    const user = await UserService.registerUser(req);

    return res.json(user);
  } catch (e) {
    return next(e);
  }
}
