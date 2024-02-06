import { ColorModel } from "../models/ColorModel.js";

export const getColor = async (req, res) => {
  try {
    const colores = await ColorModel.findAll({
      attributes: ['id', 'descripcion', 'state'],
      where: {
        state: true
      }
    });
  
    res.status(200).json({colores});
   
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

export const createColor = async (req, res) => {
  try {
    const {descripcion} = req.body;
    if (!(descripcion)) {
      return res.status(400).json({ message: "all input is required" });
    }
    const oldUser = await ColorModel.findOne({ where: { descripcion:descripcion } });
    if (oldUser) {
      return res.status(409).json("color already exist, enter again");
    }
    const colores = await ColorModel.create({
        descripcion
    });
   return res.status(201).json({ colores});
  } catch (error) {
   return res.status(500).json({ error: error.message });
  }
};
export const updateColor= async (req, res) => { 
  if (!req.body.descripcion) {
    res.status(400).json({ message: "descripcion is required" });
  }
  const descripcion = await ColorModel.findOne({ where: { id: req.params.id } });
  if (descripcion) {
    descripcion.set(req.body);
    await descripcion.save();
    res.status(200).json({ message: "update" });
  } else {
    res.status(404).json({ message: "type not found" });
  }
};
export const deleteColor= async (req, res) => {
  const descripcion = await ColorModel.findOne({ where: { id: req.params.id } });
  if (descripcion) {
      descripcion.set({ ...descripcion, state: false });
    await descripcion.save();
   return res.status(200).json({ message: "delete" });
  } else {
   return res.status(404).json({ message: "descripcion not found" });
  }
  };