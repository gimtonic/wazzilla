import Session from "@models/session";
import generateUUID from "@helpers/generateUUID";
import { IUserSession } from "@types";
import { addHours } from "date-fns";

export async function createSession(id: Number): Promise<IUserSession> {
  try {
    const expiresAt = addHours(
      new Date(),
      Number(process.env.USER_SESSION_EXPIRY_HOURS)
    );
    return await Session.create({
      id: generateUUID(),
      userId: id,
      expiresAt,
    });
  } catch (e) {
    throw Error(e);
  }
}

export async function getSession(
  userSessionId: String
): Promise<IUserSession | null> {
  try {
    return await Session.findOne({ where: { id: String(userSessionId) } });
  } catch (e) {
    throw Error(e);
  }
}

export async function deleteAllSessionsByUser(userId: Number): Promise<void> {
  try {
    await Session.destroy({
      where: {
        userId: String(userId),
      },
    });
  } catch (e) {
    throw Error(e);
  }
}
