import { permissionModel } from "../models/permissionModel.js";

export const getPermission = async (req, res) => {
    try {
        const types = await permissionModel.findAll({ where: { state: true } });
        res.status(200).json(types);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

export const createPermission = async (req, res) => {
    try {
        // Get type input
        const { type } = req.body;
        // Validate type input
        if (!type) {
          res.status(400).json({ message: "type is required" });
        }
        // Create type in our database
        const types = await permissionModel.create(req.body);
    
        res.status(201).json({ message: "create", types });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};
export const updatePermission= async (req, res) => {
    if (!req.body.type) {
        res.status(400).json({ message: "type is required" });
      }
      const type = await permissionModel.findOne({ where: { id: req.params.id } });
      if (type) {
        type.set(req.body);
        await type.save();
        res.status(200).json({ message: "update" });
      } else {
        res.status(404).json({ message: "type not found" });
      }
};
export const deletePermission = async (req, res) => {
    const type = await permissionModel.findOne({ where: { id: req.params.id } });
    if (type) {
      type.set({ ...type, state: false });
      await type.save();
      res.status(200).json({ message: "delete" });
    } else {
      res.status(404).json({ message: "type not found" });
    }
};
