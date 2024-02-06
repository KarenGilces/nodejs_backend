import express from 'express';
import { getMarca,createMarca,updateMarca,deleteMarca} from '../controller/marcaController.js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();

rotuer.get('/marca',verifyToken, getMarca);
rotuer.post('/marca',verifyToken,createMarca);
rotuer.put('/marca/:id',verifyToken, updateMarca);
rotuer.delete('/marca/:id',verifyToken,  deleteMarca);


export default rotuer;