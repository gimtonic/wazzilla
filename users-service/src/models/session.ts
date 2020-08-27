import { DataTypes, Model } from "sequelize";

import sequelize from "./connection";

export default class Session extends Model {
  public id!: Number;
  public userId!: Number;
  public expiresAt!: Date;
}
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
    timestamps: false,
  }
);
