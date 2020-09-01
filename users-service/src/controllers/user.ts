import { Request, Response, NextFunction } from "express";
import * as UserService from "@services/user";
import validate from "@helpers/validate";

export async function registerUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response<any>> {
  try {
    validate(req, res);
    const user = await UserService.registerUser(req);

    return res.json(user);
  } catch (e) {
    /* istanbul ignore next */
    return next(e);
  }
}
