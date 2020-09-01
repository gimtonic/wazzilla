import sequelizeConnector from "./sequelizeConnector";

let DB_URI = process.env.NOTES_DB_URI as string;

if (process.env.NODE_ENV === "test") {
  DB_URI = process.env.TEST_DB_URI as string;
}

export default sequelizeConnector(DB_URI);
