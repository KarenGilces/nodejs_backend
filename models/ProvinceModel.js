import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";

export const ProvinceModel = sequelize.define("Provinces",{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER,
    },
    code:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    name:{
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