import express from 'express';
import { getCanton,createCanton,updateCanton,deleteCanton} from '../controller/CantonController.js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();

rotuer.get('/canton', verifyToken,getCanton);
rotuer.post('/canton',createCanton);
rotuer.put('/canton/:id',verifyToken, updateCanton);
rotuer.delete('/canton/:id',verifyToken,  deleteCanton);


export default rotuer;