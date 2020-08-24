// @ts-ignore
import { getNotes } from "@controllers/note";
import { Application } from "express";

const setupRoutes = (app: Application) => {
  app.get("/notes", getNotes);
};

export default setupRoutes;
