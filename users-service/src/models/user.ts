import { DataTypes, Model } from "sequelize";
import sequelize from "./connection";

export default class User extends Model {
  public id!: Number;
  public email!: String;
  public passwordHash!: String;
}

User.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    passwordHash: {
      allowNull: false,
      type: DataTypes.CHAR(64),
    },
  },
  {
    defaultScope: {
      // @ts-ignore
      rawAttributes: { exclude: ["passwordHash"] },
    },
    modelName: "users",
    timestamps: false,
    sequelize,
  }
);
