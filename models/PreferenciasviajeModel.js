import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";


export const PreferenciasviajeModel = sequelize.define(
  "preferenciasviaje",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    
      preferencia: {
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