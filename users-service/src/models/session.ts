import { DataTypes, Model } from "sequelize";

import sequelize from "./connection";

export default class Session extends Model {}
Session.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    userId: {
      allowNull: false,
      references: {
        key: "id",
        model: "users",
      },
      type: DataTypes.UUID,
    },
    expiresAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    modelName: "sessions",
    paranoid: false,
    sequelize,
    updatedAt: false,
  }
);
