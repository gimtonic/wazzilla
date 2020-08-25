"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "users",
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: true,
        },
        passwordHash: {
          allowNull: false,
          type: Sequelize.CHAR(64),
        },
      },
      {
        charset: "utf8",
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  },
};
