import { Request } from "express";
import Note from "@models/note";
import generateUUID from "@helpers/generateUUID";
import { INote } from "@types";

export async function createNote(req: Request): Promise<INote> {
  const { desc } = req.body;
  try {
    return await Note.create({
      desc,
      id: generateUUID(),
      userId: 23,
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

export async function getNote(id: String): Promise<INote | null> {
  try {
    return await Note.findOne({
      where: {
        id: String(id),
      },
    });
  } catch (e) {
    throw Error(e);
  }
}

export async function editNote(id: String, desc: String): Promise<void> {
  try {
    await Note.update(
      {
        desc,
      },
      {
        where: {
          id: String(id),
        },
      }
    );
  } catch (e) {
    throw Error(e);
  }
}

export async function deleteNode(id: String): Promise<void> {
  try {
    await Note.destroy({
      where: {
        id: String(id),
      },
    });
  } catch (e) {
    throw Error(e);
  }
}

export async function shareNote(id: String): Promise<void> {
  try {
    await Note.update(
      {
        hashLink: generateUUID(),
      },
      {
        where: {
          id: String(id),
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
