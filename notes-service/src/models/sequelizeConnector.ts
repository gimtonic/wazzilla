import { Sequelize, Options } from "sequelize";

export default (uri: string): Sequelize => {
  return new Sequelize(uri, {
    dialectOptions: {
      charset: "utf8",
      multipleStatements: true,
    },
    logging: false,
  } as Options);
};
