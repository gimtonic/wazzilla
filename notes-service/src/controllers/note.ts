import { Request, Response, NextFunction } from "express";
import * as NoteService from "@services/note";
import validate from "@helpers/validate";
import checkUserPermission from "@helpers/checkUserPermission";

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
  try {
    validate(req, res);
    await checkUserPermission(req);
    await NoteService.editNote(req);

    const note = await NoteService.getNote(req);

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
  try {
    await checkUserPermission(req);
    await NoteService.deleteNode(req);
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
  try {
    await checkUserPermission(req);
    await NoteService.shareNote(req);

    const note = await NoteService.getNote(req);

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
