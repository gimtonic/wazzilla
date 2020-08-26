import { Request } from "express";
import Note from "@models/note";
import generateUUID from "@helpers/generateUUID";
import { INote } from "@types";

export async function createNote(req: Request): Promise<INote> {
  const { desc } = req.body;
  try {
    const user = await Note.create({
      desc,
      id: generateUUID(),
      userId: 23,
    });

    return user;
  } catch (e) {
    throw Error(e);
  }
}

export async function getNotes(): Promise<INote[]> {
  try {
    const users = await Note.findAll();

    return users;
  } catch (e) {
    throw Error(e);
  }
}
