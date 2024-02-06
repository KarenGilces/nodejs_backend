import { TiposDocumentosModel } from "../models/TiposDocumentosModel.js";

export const getTiposDocumentos = async (req, res) => {
  try {
    const documentos = await TiposDocumentosModel.findAll({
      attributes: ['id', 'datos']
    },{where: {state:true}});
  
    res.status(200).json({documentos});
   
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

export const createTiposDocumentos = async (req, res) => {
  try {
    const {datos} = req.body;
    if (!(datos)) {
      return res.status(400).json({ message: "all input is required" });
    }
    const oldUser = await TiposDocumentosModel.findOne({ where: { datos:datos } });
    if (oldUser) {
      return res.status(409).json("datos already exist, enter again");
    }
    const tiposDocumentos = await TiposDocumentosModel.create({
      datos
    });
   return res.status(201).json({ tiposDocumentos});
  } catch (error) {
   return res.status(500).json({ error: error.message });
  }
};
export const updateTiposDocumentos = async (req, res) => { 
  if (!req.body.datos) {
    res.status(400).json({ message: "datos is required" });
  }
  const datos = await TiposDocumentosModel.findOne({ where: { id: req.params.id } });
  if (datos) {
    datos.set(req.body);
    await datos.save();
    res.status(200).json({ message: "update" });
  } else {
    res.status(404).json({ message: "type not found" });
  }
};
export const deleteTiposDocumentos = async (req, res) => {
  const datos = await TiposDocumentosModel.findOne({ where: { id: req.params.id } });
  if (datos) {
    datos.set({ ...datos, state: false });
    await datos.save();
   return res.status(200).json({ message: "delete" });
  } else {
   return res.status(404).json({ message: "datos not found" });
  }
  };
