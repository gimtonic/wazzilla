import { Request, Response, NextFunction } from "express";
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
    throw Error(e);
  }
}
