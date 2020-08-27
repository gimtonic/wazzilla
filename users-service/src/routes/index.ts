import * as UserController from "@controllers/user";
import * as SessionController from "@controllers/session";
import { Application } from "express";

const setupRoutes = (app: Application) => {
  app.post("/sessions", SessionController.createSession);
  app.delete("/delete/:userSessionId", SessionController.deleteSessions);
  app.post("/register", UserController.registerUser);
};

export default setupRoutes;
