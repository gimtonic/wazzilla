import * as UserController from "@controllers/user";
import * as SessionController from "@controllers/session";
import * as UserValidator from "@validators/user";
import * as SessionValidator from "@validators/session";
import { Application } from "express";

const setupRoutes = (app: Application) => {
  app.post(
    "/sessions",
    SessionValidator.createSession,
    SessionController.createSession
  );
  app.delete("/delete/:userSessionId", SessionController.deleteSessions);
  app.get("/get/:userSessionId", SessionController.getUserBySession);
  app.post(
    "/register",
    UserValidator.registerUser,
    UserController.registerUser
  );
};

export default setupRoutes;
