import { getNotes } from "#root/controllers/note";

const setupRoutes = (app) => {
  app.get("/notes", getNotes);
};

export default setupRoutes;
