import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";

export const TiposDocumentosModel = sequelize.define(
    "TiposDocumentos",{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER,
    },
    datos:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
},
{
    timestamps:false
}
)