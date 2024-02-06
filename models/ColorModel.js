import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";


export const ColorModel = sequelize.define(
  "color",
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
  const coloresData = [
    { descripcion: "Negro" },
    { descripcion: "Blanco" },
    { descripcion: "Gris oscuro" },
    { descripcion: "Rojo oscuro" },
    { descripcion: "Rojo" }, 
    { descripcion: "Azul oscuro" },
    { descripcion: "Azul" }, 
    { descripcion: "Verde oscuro" },
    { descripcion: "Verde" }, 
    { descripcion: "Marròn" },
    { descripcion: "Beige" }, 
    { descripcion: "Naranja" }, 
    { descripcion: "Amarillo" },
    { descripcion: "Morado" },
    { descripcion: "Rosa" },
  ];
  async function sedcolor() {
    try {
      const colores = await ColorModel.findAll();
      if(colores && colores.length <= 0){
        for (const colorData of coloresData) {
          await ColorModel.create(colorData);
        }
      }
    } catch (error) {
      console.error("Error al insertar los colores:", error);
    } 
  }

  sedcolor();