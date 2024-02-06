import { VerifyUserProfileModel } from "../models/VerifyUserProfileModel.js";
export const getVerifyUser = async (req, res) => {
    try {
        const perfilUsuario = await VerifyUserProfileModel.findAll({
          attributes: ['id', 'detail', 'date', 'users_id','verificationType_id']
        },{where: {state:true}});
      
        res.status(200).json({perfilUsuario});
       
      } catch (error) {
          res.status(500).json({ error: error.message });
      }
};
export const createVerifyUser  = async (req, res) => {
  try {
    const { detail, date, users_id, verificationType_id } = req.body;
    if (!(detail ||  date ||  users_id ||  verificationType_id)) {
      res.status(400).json({ message: "all input is required" });
    }
    const oldUser = await VerifyUserProfileModel.findOne({ where: { detail: detail } });
    if (oldUser) {
      return res.status(409).json("detail already exist, enter again");
    }
    const users = await VerifyUserProfileModel.create({
      detail,
      date, // sanitize: convert email to lowercase
      users_id,
      verificationType_id,
    });
    res.status(201).json({ users});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const updateVerifyUser  = async (req, res) => {
  if (!req.body.detail) {
    res.status(400).json({ message: "detail is required" });
  }
  const type = await VerifyUserProfileModel.findOne({ where: { id: req.params.id } });
  if (type) {
    type.set(req.body);
    await type.save();
    res.status(200).json({ message: "update" });
  } else {
    res.status(404).json({ message: "type not found" });
  }
};
export const deleteVerifyUser = async (req, res) => {
  const type = await VerifyUserProfileModel.findOne({ where: { id: req.params.id } });
  if (type) {
    type.set({ ...type, state: false });
    await type.save();
    res.status(200).json({ message: "delete" });
  } else {
    res.status(404).json({ message: "type not found" });
  }
};
