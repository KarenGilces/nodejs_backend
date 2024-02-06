import express from 'express';
import { getDocumentos,createDocumentos,
    updateDocumentos,deleteDocumentos} 
from '../controller/DocumentosController.js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();

rotuer.get('/documentos', getDocumentos);
rotuer.post('/documentos', createDocumentos);
rotuer.put('/documentos/:id', updateDocumentos);
rotuer.delete('/documentos/:id',  deleteDocumentos);


export default rotuer;