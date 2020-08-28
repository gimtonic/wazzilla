import { Request } from "express";
import Note from "@models/note";
import generateUUID from "@helpers/generateUUID";
import { INote } from "@types";

export async function createNote(req: Request): Promise<INote> {
  try {
    const { desc, userId } = req.body;
    return await Note.create({
      desc,
      id: generateUUID(),
      userId,
    });
  } catch (e) {
    throw Error(e);
  }
}

export async function getNotes(): Promise<INote[]> {
  try {
    return await Note.findAll();
  } catch (e) {
    throw Error(e);
  }
}

export async function getNote(req: Request): Promise<INote | null> {
  try {
    const { userId } = req.body;
    const { id } = req.params;
    return await Note.findOne({
      where: {
        id: String(id),
        userId: String(userId),
      },
    });
  } catch (e) {
    throw Error(e);
  }
}

export async function editNote(req: Request): Promise<void> {
  try {
    const { userId, desc } = req.body;
    const { id } = req.params;
    await Note.update(
      {
        desc,
      },
      {
        where: {
          id: String(id),
          userId,
        },
      }
    );
  } catch (e) {
    throw Error(e);
  }
}

export async function deleteNode(req: Request): Promise<void> {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    await Note.destroy({
      where: {
        id: String(id),
        userId,
      },
    });
  } catch (e) {
    throw Error(e);
  }
}

export async function shareNote(req: Request): Promise<void> {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    await Note.update(
      {
        hashLink: generateUUID(),
      },
      {
        where: {
          id: String(id),
          userId,
        },
      }
    );
  } catch (e) {
    throw Error(e);
  }
}

export async function getNoteByHashLink(
  hashLink: String
): Promise<INote | null> {
  try {
    return await Note.findOne({
      where: {
        hashLink: String(hashLink),
      },
    });
  } catch (e) {
    throw Error(e);
  }
}
