import { UserPermissionModel } from "../models/UserPermissionModel.js";

export const getUserPermission = async (req, res) => {
    try {
        const PermisoUsuario = await UserPermissionModel.findAll({
          attributes: ['id', 'users_id', 'permission_id']
        },{where: {state:true}});
      
        res.status(200).json({PermisoUsuario});
       
      } catch (error) {
          res.status(500).json({ error: error.message });
      }
};

export const createUserPermission = async (req, res) => {
    try {
        const { users_id, permission_id} = req.body;
        if (!(users_id ||  permission_id  )) {
          res.status(400).json({ message: "all input is required" });
        }
        
        const users = await UserPermissionModel.create({
            users_id,
            permission_id, 
           
        });
        res.status(201).json({ users});
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};
export const updateUserPermission= async (req, res) => {
    if (!req.body.users_id) {
        res.status(400).json({ message: "users_id is required" });
      }
      const type = await UserPermissionModel.findOne({ where: { id: req.params.id } });
      if (type) {
        type.set(req.body);
        await type.save();
        res.status(200).json({ message: "update" });
      } else {
        res.status(404).json({ message: "type not found" });
      }
};
export const deleteUserPermission= async (req, res) => {
    const type = await UserPermissionModel.findOne({ where: { id: req.params.id } });
    if (type) {
      type.set({ ...type, state: false });
      await type.save();
      res.status(200).json({ message: "delete" });
    } else {
      res.status(404).json({ message: "type not found" });
    }
};