import * as UserController from "@controllers/user";
import * as SessionController from "@controllers/session";
import { Application } from "express";

const setupRoutes = (app: Application) => {
  app.get("/sessions", SessionController.getSessions);
  app.post("/register", UserController.registerUser);
};

export default setupRoutes;
