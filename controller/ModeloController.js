import { ModeloModel} from "../models/ModeloModel.js";
import { MarcaModel } from "../models/MarcaModel.js";
  export const getModelo = async (req, res) => {
    try {
      const modelos= await ModeloModel.findAll({
        attributes: ['id', 'descripcion', 'id_marca','state'],
        where: {state:true},
        include: [
          {
            model: MarcaModel, 
            attributes: ['id', 'descripcion'] 
          }
        ]
    });
    
      res.status(200).json({modelos});
     
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  };
  
  export const createModelo = async (req, res) => {
    try {
      const { descripcion, id_marca} = req.body;
      if (!(descripcion ||  id_marca)) {
        res.status(400).json({ message: "all input is required" });
      }
      const oldUser = await ModeloModel.findOne({ where: { descripcion: descripcion } });
      if (oldUser) {
        return res.status(409).json("descripcion already exist, enter again");
      }
      const modelos = await ModeloModel.create({
        descripcion,
        id_marca
         
          
      });
      res.status(201).json({ modelos});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  export const updateModelo = async (req, res) => { 
  
   if (!req.body.descripcion) {
          res.status(400).json({ message: "descripcion is required" });
        }
        const type = await ModeloModel.findOne({ where: { id: req.params.id } });
        if (type) {
          type.set(req.body);
          await type.save();
          res.status(200).json({ message: "update" });
        } else {
          res.status(404).json({ message: "type not found" });
        }};
  export const deleteModelo = async (req, res) => {
    const descripcion = await ModeloModel.findOne({ where: { id: req.params.id } });
    if (descripcion) {
      descripcion.set({ ...descripcion, state: false });
      await descripcion.save();
      res.status(200).json({ message: "delete" });
    } else {
      res.status(404).json({ message: "type not found" });
    }
    };