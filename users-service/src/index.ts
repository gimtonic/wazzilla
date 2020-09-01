import { app } from "./app";
let PORT = Number(process.env.USERS_SERVICE_PORT);

/* istanbul ignore else */
if (process.env.NODE_ENV === "test") {
  PORT = Number(process.env.TEST_SERVER_PORT);
}

const server = app.listen(PORT, "0.0.0.0", () => {
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== "test") {
    console.info(`Users service listening on ${PORT}`);
  }
});

export default server;
