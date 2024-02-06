import express from 'express';
import { getModelo,createModelo,
    updateModelo,deleteModelo} 
from '../controller/ModeloController.js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();

rotuer.get('/modelo', getModelo);
rotuer.post('/modelo', createModelo);
rotuer.put('/modelo/:id', updateModelo);
rotuer.delete('/modelo/:id',  deleteModelo);


export default rotuer;