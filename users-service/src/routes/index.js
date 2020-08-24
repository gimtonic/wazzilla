import { getUsers } from "#root/controllers/user";
import { getSessions } from "#root/controllers/session";

const setupRoutes = (app) => {
  app.get("/sessions", getSessions);
  app.get("/users", getUsers);
};

export default setupRoutes;
