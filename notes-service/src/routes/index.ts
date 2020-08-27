import * as NoteController from "@controllers/note";
import { Application } from "express";
import * as NoteValidator from "@validators/note";

const setupRoutes = (app: Application) => {
  app.post("/create", NoteValidator.createNote, NoteController.createNote);
  app.get("/get", NoteController.getNotes);
  app.post("/edit/:id", NoteValidator.editNote, NoteController.editNote);
  app.delete(
    "/delete/:id",
    NoteValidator.deleteNote,
    NoteController.deleteNote
  );
  app.post("/share/:id", NoteValidator.shareNote, NoteController.shareNote);
  app.get(
    "/get-note/:hashLink",
    NoteValidator.getNoteByHashLink,
    NoteController.getNoteByHashLink
  );
};

export default setupRoutes;
