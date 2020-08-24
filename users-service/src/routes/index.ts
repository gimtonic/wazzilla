// @ts-ignore
import { getUsers } from "@controllers/user";
// @ts-ignore
import { getSessions } from "@controllers/session";
import { Application } from "express";

const setupRoutes = (app: Application) => {
  app.get("/sessions", getSessions);
  app.get("/users", getUsers);
};

export default setupRoutes;
