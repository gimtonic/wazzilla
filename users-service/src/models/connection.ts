import { Sequelize, Options } from "sequelize";

const DB_URI = process.env.DB_URI as string;

const sequelize = new Sequelize(DB_URI, {
  dialectOptions: {
    charset: "utf8",
    multipleStatements: true,
  },
  logging: false,
} as Options);

export default sequelize;
