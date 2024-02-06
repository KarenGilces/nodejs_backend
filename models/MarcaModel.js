import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";


export const MarcaModel = sequelize.define(
  "marcas",
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
  )
  ;
 
  
  


  