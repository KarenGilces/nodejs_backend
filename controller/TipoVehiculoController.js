import { TipoVehiculoModel } from "../models/TipoVehiculoModel.js";

export const getTipoVehiculo = async (req, res) => {
  try {
    const tipoVehiculo = await TipoVehiculoModel.findAll({
      attributes: ['id', 'descripcion','state']
    ,where: {state:true}});
  
    res.status(200).json({tipoVehiculo});
   
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

export const createTipoVehiculo= async (req, res) => {
  try {
    const {descripcion} = req.body;
    if (!(descripcion)) {
      return res.status(400).json({ message: "all input is required" });
    }
    const oldUser = await TipoVehiculoModel.findOne({ where: { descripcion:descripcion } });
    if (oldUser) {
      return res.status(409).json("TipoVehiculo already exist, enter again");
    }
    const tipoVehiculo = await TipoVehiculoModel.create({
        descripcion
      });
      return res.status(201).json({ tipoVehiculo});
     } catch (error) {
      return res.status(500).json({ error: error.message });
     }
};
export const updateTipoVehiculo= async (req, res) => {
  if (!req.body.descripcion) {
    res.status(400).json({ message: "descripcion is required" });
  }
  const descripcion = await TipoVehiculoModel.findOne({ where: { id: req.params.id } });
  if (descripcion) {
    descripcion.set(req.body);
    await descripcion.save();
    res.status(200).json({ message: "update" });
  } else {
    res.status(404).json({ message: "type not found" });
  }
};
export const deleteTipoVehiculo= async (req, res) => {
  const descripcion = await TipoVehiculoModel.findOne({ where: { id: req.params.id } });
  if (descripcion) {
      descripcion.set({ ...descripcion, state: false });
    await descripcion.save();
   return res.status(200).json({ message: "delete" });
  } else {
   return res.status(404).json({ message: "descripcion not found" });
  }
  };