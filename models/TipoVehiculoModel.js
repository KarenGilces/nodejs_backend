import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";


export const TipoVehiculoModel = sequelize.define(
  "tipoVehiculos",
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
  const tipovehiculoData = [
    { descripcion: "Compacto" },
    { descripcion: "Sedan" },
    { descripcion: "Descapatable" },
    { descripcion: "Familiar" },
    { descripcion: "Todoterreno" },                
    // Agrega más objetos para insertar más datos
  ];
  async function seeedtipo() {
    try {
      const tipo = await TipoVehiculoModel.findAll();
      if(tipo && tipo.length <= 0){
      for (const tiposData of tipovehiculoData) {
        await TipoVehiculoModel.create(tiposData);
      }
    }
    } catch (error) {
      console.error("Error al insertar datos de tipos de vehículos:", error);
    } 
  }
  seeedtipo();