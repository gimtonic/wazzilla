// @ts-ignore
import * as NoteController from "@controllers/note";
import { Application } from "express";

const setupRoutes = (app: Application) => {
  app.post("/create", NoteController.createNote);
  app.get("/get", NoteController.getNotes);
  app.post("/edit/:id", NoteController.editNote);
  app.delete("/delete/:id", NoteController.deleteNote);
  app.post("/share/:id", NoteController.shareNote);
  app.get("/get-note/:hashLink", NoteController.getNoteByHashLink);
};

export default setupRoutes;
