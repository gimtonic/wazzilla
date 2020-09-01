import { Request } from "express";
import User from "@models/user";
import generateUUID from "@helpers/generateUUID";
import hashPassword from "@helpers/hashPassword";
import { IUser } from "@types";

export async function registerUser(req: Request): Promise<IUser> {
  const { email, password } = req.body;
  try {
    return await User.create({
      email,
      id: generateUUID(),
      passwordHash: hashPassword(password),
    });
  } catch (e) {
    /* istanbul ignore next */
    throw Error(e);
  }
}

export async function deleteUser(userId: Number): Promise<void> {
  try {
    await User.destroy({ where: { id: String(userId) } });
  } catch (e) {
    /* istanbul ignore next */
    throw Error(e);
  }
}

export async function findUserByEmail(email: String): Promise<IUser | null> {
  try {
    return await User.findOne({ where: { email: String(email) } });
  } catch (e) {
    /* istanbul ignore next */
    throw Error(e);
  }
}

export async function getUserById(id: Number): Promise<IUser | null> {
  try {
    return await User.findOne({ where: { id: String(id) } });
  } catch (e) {
    /* istanbul ignore next */
    throw Error(e);
  }
}
