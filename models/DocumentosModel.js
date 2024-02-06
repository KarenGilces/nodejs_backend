import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import {  VeriDocumentosPersonalesModel } from "./VeriDocumentosPersonalesModel.js";


export const DocumentosModel = sequelize.define(
  "documentos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    
      descripcion: {
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
VeriDocumentosPersonalesModel.hasMany(DocumentosModel, { foreignKey: "id_VeriDocumentosPersonales" });
DocumentosModel.belongsTo(VeriDocumentosPersonalesModel, { foreignKey: "id_VeriDocumentosPersonales" });