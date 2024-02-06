import { VeriDocumentosPersonalesModel } from "../models/VeriDocumentosPersonalesModel.js";

export const getVeriDocumentosPersonales = async (req, res) => {
  try {
    const DocumentosPersonales= await VeriDocumentosPersonalesModel.findAll({
      attributes: ['id', 'descripcion', 'id_tipoDocumento', 'id_datosPersonales']
    },{where: {state:true}});
  
    res.status(200).json({DocumentosPersonales});
   
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

export const createVeriDocumentosPersonales = async (req, res) => {
  try {
    const { descripcion, id_tipoDocumento, id_datosPersonales} = req.body;
    if (!(descripcion ||  id_tipoDocumento ||  id_datosPersonales )) {
      res.status(400).json({ message: "all input is required" });
    }
    const oldUser = await VeriDocumentosPersonalesModel.findOne({ where: { descripcion: descripcion } });
    if (oldUser) {
      return res.status(409).json("descripcion already exist, enter again");
    }
    const VeriDocumentosPersonales = await VeriDocumentosPersonalesModel.create({
      descripcion,
      id_tipoDocumento, // sanitize: convert email to lowercase
      id_datosPersonales
       
        
    });
    res.status(201).json({ VeriDocumentosPersonales});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const updateVeriDocumentosPersonales = async (req, res) => { 

 if (!req.body.descripcion) {
        res.status(400).json({ message: "descripcion is required" });
      }
      const type = await VeriDocumentosPersonalesModel.findOne({ where: { id: req.params.id } });
      if (type) {
        type.set(req.body);
        await type.save();
        res.status(200).json({ message: "update" });
      } else {
        res.status(404).json({ message: "type not found" });
      }};
export const deleteVeriDocumentosPersonales = async (req, res) => {
  const descripcion = await VeriDocumentosPersonalesModel.findOne({ where: { id: req.params.id } });
  if (descripcion) {
    descripcion.set({ ...descripcion, state: false });
    await descripcion.save();
    res.status(200).json({ message: "delete" });
  } else {
    res.status(404).json({ message: "type not found" });
  }
  };