import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import { UserModel } from "./UserModel.js";
import { permissionModel } from "./permissionModel.js";


export const UserPermissionModel = sequelize.define(
  "UserPermissions",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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

UserModel.hasMany(UserPermissionModel, { foreignKey: "users_id" });
UserPermissionModel.belongsTo(UserModel, { foreignKey: "users_id" });
permissionModel.hasMany(UserPermissionModel, { foreignKey: "permission_id" });
UserPermissionModel.belongsTo(UserPermissionModel, { foreignKey: "permission_id" });