import { CantonModel } from "../models/CantonModel.js";

export const getCanton = async (req, res) => {
    try {
        const cantones = await CantonModel.findAll({
          attributes: ['id', 'code', 'name','provinces_id']
        },{where: {state:true}});
      
        res.status(200).json({cantones});
       
      } catch (error) {
          res.status(500).json({ error: error.message });
      }
};

export const createCanton = async (req, res) => {
    try {
        const { code, name, provinces_id } = req.body;
        if (!(code ||  name ||    provinces_id)) {
          res.status(400).json({ message: "all input is required" });
        }
        const oldUser = await CantonModel.findOne({ where: { code: code } });
        if (oldUser) {
          return res.status(409).json("code already exist, enter again");
        }
        const users = await CantonModel.create({
            code,
            name, // sanitize: convert email to lowercase
            provinces_id,
        });
        res.status(201).json({ users});
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};
export const updateCanton = async (req, res) => {
    if (!req.body.code) {
        res.status(400).json({ message: "code is required" });
      }
      const type = await CantonModel.findOne({ where: { id: req.params.id } });
      if (type) {
        type.set(req.body);
        await type.save();
        res.status(200).json({ message: "update" });
      } else {
        res.status(404).json({ message: "type not found" });
      }
};
export const deleteCanton= async (req, res) => {
    const type = await CantonModel.findOne({ where: { id: req.params.id } });
    if (type) {
      type.set({ ...type, state: false });
      await type.save();
      res.status(200).json({ message: "delete" });
    } else {
      res.status(404).json({ message: "type not found" });
    }
};
