// @ts-ignore
import * as NoteController from "@controllers/note";
import { Application } from "express";

const setupRoutes = (app: Application) => {
  app.post("/create", NoteController.createNote);
  app.get("/get", NoteController.getNotes);
};

export default setupRoutes;
