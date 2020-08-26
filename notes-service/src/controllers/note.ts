import { Request, Response, NextFunction } from "express";
import * as NoteService from "@services/note";

export async function createNote(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response<any>> {
  const { desc } = req.body;
  if (!desc) {
    return next(new Error("Invalid body"));
  }
  try {
    const note = await NoteService.createNote(req);

    return res.json(note);
  } catch (e) {
    return next(e);
  }
}

export async function getNotes(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response<any>> {
  try {
    const notes = await NoteService.getNotes();

    return res.json(notes);
  } catch (e) {
    return next(e);
  }
}
