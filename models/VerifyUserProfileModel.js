import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import { UserModel } from "./UserModel.js";
import { VerificationTypeModel } from "./VerificationTypeModel.js";

export const VerifyUserProfileModel = sequelize.define(
  "VerifyUserProfiles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    detail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
  },
  {
    timestamps: false,
  }
);

UserModel.hasMany(VerifyUserProfileModel, { foreignKey: "users_id" });
VerifyUserProfileModel.belongsTo(UserModel, { foreignKey: "users_id" });
VerificationTypeModel.hasMany(VerifyUserProfileModel, { foreignKey: "verificationType_id" });
VerifyUserProfileModel.belongsTo(VerificationTypeModel, { foreignKey: "verificationType_id" });
