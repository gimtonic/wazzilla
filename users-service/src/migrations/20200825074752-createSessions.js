"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "sessions",
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
        },
        userId: {
          allowNull: false,
          references: {
            key: "id",
            model: "users",
          },
          type: Sequelize.UUID,
        },
        expiresAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        charset: "utf8",
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("sessions");
  },
};
