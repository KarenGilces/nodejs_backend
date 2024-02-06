import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import {  ProvinceModel } from "./ProvinceModel.js";

export const CantonModel = sequelize.define(
  "Cantons",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    
      
      state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      }
  },
  {
    timestamps: false,
  }
);

ProvinceModel.hasMany(CantonModel, { foreignKey: "provinces_id" });
CantonModel.belongsTo(ProvinceModel, { foreignKey: "provinces_id" });