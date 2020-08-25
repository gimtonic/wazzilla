import { DataTypes, Model } from "sequelize";

import sequelize from "./connection";

export class Note extends Model {}
Note.init(
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
    desc: {
      allowNull: false,
      type: DataTypes.STRING(1000),
    },
    hashLink: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    modelName: "notes",
    sequelize,
  }
);
