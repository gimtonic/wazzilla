import sequelizeConnector from "./sequelizeConnector";

let DB_URI = process.env.USERS_DB_URI as string;

/* istanbul ignore else */
if (process.env.NODE_ENV === "test") {
  DB_URI = process.env.TEST_DB_URI as string;
}

export default sequelizeConnector(DB_URI);
