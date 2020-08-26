import { DataTypes, Model } from "sequelize";
import sequelize from "./connection";

export default class Note extends Model {
  public id!: Number;
  public userId!: Number;
  public desc!: String;
  public hashLink?: String;
  public createdAt!: Date;
  public updatedAt?: Date;
}

Note.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    userId: {
      allowNull: false,
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
