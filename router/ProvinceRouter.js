import express from 'express';
import { getProvince,createProvince,updateProvince,deleteProvince} from '../controller/ProvinceController.js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();

rotuer.get('/province',verifyToken, getProvince);
rotuer.post('/province',verifyToken, createProvince);
rotuer.put('/province/:id',verifyToken, updateProvince);
rotuer.delete('/province/:id',verifyToken,  deleteProvince);


export default rotuer;