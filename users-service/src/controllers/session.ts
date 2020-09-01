import { Request, Response, NextFunction } from "express";
import * as SessionService from "@services/session";
import * as UserService from "@services/user";
import passwordCompareSync from "@helpers/passwordCompareSync";
import validate from "@helpers/validate";

export async function createSession(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    validate(req, res);
    const { email, password } = req.body;
    const user = await UserService.findUserByEmail(email);

    if (!user) return next(new Error("Неверные данные"));

    if (!passwordCompareSync(password, user.passwordHash)) {
      return next(new Error("Неверные данные"));
    }

    const session = await SessionService.createSession(user.id);

    return res.json(session);
  } catch (e) {
    /* istanbul ignore next */
    return next(e);
  }
}

export async function deleteSessions(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { userSessionId } = req.params;
    const session = await SessionService.getSession(userSessionId);

    if (!session) return next(new Error("Неверные данные"));

    await SessionService.deleteAllSessionsByUser(session.userId);

    return res.json({
      message: "Сессии успешно удалены",
    });
  } catch (e) {
    /* istanbul ignore next */
    return next(e);
  }
}

export async function getUserBySession(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { userSessionId } = req.params;
    const session = await SessionService.getSession(userSessionId);

    if (!session) return next(new Error("Неверные данные"));

    const user = await UserService.getUserById(session.userId);

    return res.json(user);
  } catch (e) {
    /* istanbul ignore next */
    return next(e);
  }
}
