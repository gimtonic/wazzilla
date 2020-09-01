import { Request, Response, NextFunction } from "express";
import * as UserService from "@services/user";
import * as SessionService from "@services/session";
import validate from "@helpers/validate";
import { IUserSession } from "@types";

export async function registerUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    validate(req, res);
    const user = await UserService.registerUser(req);

    return res.json(user);
  } catch (e) {
    /* istanbul ignore next */
    return next(e);
  }
}

/* istanbul ignore next */
export async function deleteUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { userSessionId } = req.params;
    const session = await SessionService.getSession(userSessionId);
    if (session) {
      await SessionService.deleteAllSessionsByUser(session.userId);
      await UserService.deleteUser(session.userId);

      return res.json({
        message: "Пользователь успешно удален",
      });
    }
  } catch (e) {
    return next(e);
  }
}
