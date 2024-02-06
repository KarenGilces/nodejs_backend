import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import {  DatosPersonalesModel } from "./DatosPersonalesModel.js";
import {  PreferenciasviajeModel } from "./PreferenciasviajeModel.js";


export const PreferenciasDatosPersonalesModel = sequelize.define(
  "preferenciasdatospersonales",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
  DatosPersonalesModel.hasMany(PreferenciasDatosPersonalesModel, { foreignKey: "id_datosPersonales" });
  PreferenciasDatosPersonalesModel.belongsTo(DatosPersonalesModel, { foreignKey: "id_datosPersonales" });
  PreferenciasviajeModel.hasMany(PreferenciasDatosPersonalesModel, { foreignKey: "id_preferencia" });
  PreferenciasDatosPersonalesModel.belongsTo(PreferenciasviajeModel, { foreignKey: "id_preferencia" });
  