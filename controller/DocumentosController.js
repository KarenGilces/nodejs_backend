
  import { DocumentosModel} from "../models/DocumentosModel.js";

  export const getDocumentos = async (req, res) => {
    try {
      const documentos= await DocumentosModel.findAll({
        attributes: ['id', 'descripcion', 'id_VeriDocumentosPersonales']
      },{where: {state:true}});
    
      res.status(200).json({documentos});
     
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  };
  
  export const createDocumentos = async (req, res) => {
    try {
      const { descripcion, id_VeriDocumentosPersonales} = req.body;
      if (!(descripcion ||  id_VeriDocumentosPersonales)) {
        res.status(400).json({ message: "all input is required" });
      }
      const oldUser = await DocumentosModel.findOne({ where: { descripcion: descripcion } });
      if (oldUser) {
        return res.status(409).json("descripcion already exist, enter again");
      }
      const documentos = await DocumentosModel.create({
        descripcion,
        id_VeriDocumentosPersonales
         
          
      });
      res.status(201).json({ documentos});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  export const updateDocumentos = async (req, res) => { 
  
   if (!req.body.descripcion) {
          res.status(400).json({ message: "descripcion is required" });
        }
        const type = await DocumentosModel.findOne({ where: { id: req.params.id } });
        if (type) {
          type.set(req.body);
          await type.save();
          res.status(200).json({ message: "update" });
        } else {
          res.status(404).json({ message: "type not found" });
        }};
  export const deleteDocumentos = async (req, res) => {
    const descripcion = await DocumentosModel.findOne({ where: { id: req.params.id } });
    if (descripcion) {
      descripcion.set({ ...descripcion, state: false });
      await descripcion.save();
      res.status(200).json({ message: "delete" });
    } else {
      res.status(404).json({ message: "type not found" });
    }
    };