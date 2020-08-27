import { Request, Response, NextFunction } from "express";
import * as NoteService from "@services/note";
import validate from "@helpers/validate";

export async function createNote(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> {
  validate(req, res);

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
): Promise<void | Response> {
  try {
    const notes = await NoteService.getNotes();

    return res.json(notes);
  } catch (e) {
    return next(e);
  }
}

export async function editNote(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> {
  validate(req, res);
  try {
    const { id } = req.params;
    const { desc } = req.body;

    await NoteService.editNote(id, desc);

    const note = await NoteService.getNote(id);

    return res.json(note);
  } catch (e) {
    return next(e);
  }
}

export async function deleteNote(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  validate(req, res);
  try {
    const { id } = req.params;

    await NoteService.deleteNode(id);

    return res.json({
      message: "Запись успешно удалена",
    });
  } catch (e) {
    return next(e);
  }
}

export async function shareNote(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  validate(req, res);
  try {
    const { id } = req.params;

    await NoteService.shareNote(id);

    const note = await NoteService.getNote(id);

    return res.json(note);
  } catch (e) {
    return next(e);
  }
}

export async function getNoteByHashLink(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  validate(req, res);
  try {
    const { hashLink } = req.params;

    const note = await NoteService.getNoteByHashLink(hashLink);

    return res.json(note);
  } catch (e) {
    return next(e);
  }
}
