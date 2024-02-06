import { ProvinceModel } from "../models/ProvinceModel.js";

export const getProvince = async (req, res) => {
  try {
    const provincias = await ProvinceModel.findAll({
      attributes: ['id', 'code', 'name']
    },{where: {state:true}});
  
    res.status(200).json({provincias});
   
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

export const createProvince = async (req, res) => {
  try {
    const { code, name} = req.body;
    if (!(code ||  name  )) {
      res.status(400).json({ message: "all input is required" });
    }
    const oldUser = await ProvinceModel.findOne({ where: { code: code } });
    if (oldUser) {
      return res.status(409).json("code already exist, enter again");
    }
    const users = await ProvinceModel.create({
        code,
        name, 
       
    });
    res.status(201).json({ users});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const updateProvince = async (req, res) => {
    if (!req.body.type) {
        res.status(400).json({ message: "type is required" });
      }
      const type = await ProvinceModel.findOne({ where: { id: req.params.id } });
      if (type) {
        type.set(req.body);
        await type.save();
        res.status(200).json({ message: "update" });
      } else {
        res.status(404).json({ message: "type not found" });
      }
};
export const deleteProvince= async (req, res) => {
    const type = await ProvinceModel.findOne({ where: { id: req.params.id } });
    if (type) {
      type.set({ ...type, state: false });
      await type.save();
      res.status(200).json({ message: "delete" });
    } else {
      res.status(404).json({ message: "type not found" });
    }
};
