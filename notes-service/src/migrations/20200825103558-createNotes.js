"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "notes",
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
        desc: {
          allowNull: false,
          type: Sequelize.STRING(1000),
        },
        hashLink: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: true,
        },
      },
      {
        charset: "utf8",
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("notes");
  },
};
