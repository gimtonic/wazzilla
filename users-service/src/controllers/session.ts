import { Request, Response, NextFunction } from "express";
import * as SessionService from "@services/session";
import * as UserService from "@services/user";
import passwordCompareSync from "@helpers/passwordCompareSync";

export async function createSession(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, password } = req.body;
  try {
    const user = await UserService.findUserByEmail(email);

    if (!user) return next(new Error("Invalid data!"));

    if (!passwordCompareSync(password, user.passwordHash)) {
      return next(new Error("Incorrect password!"));
    }

    const session = await SessionService.createSession(user.id);

    return res.json(session);
  } catch (e) {
    return next(e);
  }
}

export async function deleteSessions(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { userSessionId } = req.params;
  try {
    const user = await SessionService.getUserBySessionId(userSessionId);

    if (!user) return next(new Error("Invalid data!"));

    await SessionService.deleteAllSessionsByUser(user.id);

    return res.json({
      message: "Сессии успешно удалены",
    });
  } catch (e) {
    return next(e);
  }
}
