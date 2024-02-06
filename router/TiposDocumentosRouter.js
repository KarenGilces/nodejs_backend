import express from 'express';
import { getTiposDocumentos,createTiposDocumentos,updateTiposDocumentos,deleteTiposDocumentos} 
from '../controller/TiposDocumentosController.js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();

rotuer.get('/tipo/documento',verifyToken,  getTiposDocumentos);
rotuer.post('/tipo/documento',verifyToken,  createTiposDocumentos);
rotuer.put('/tipo/documento/:id',verifyToken, updateTiposDocumentos);
rotuer.delete('/tipo/documento/:id',verifyToken,   deleteTiposDocumentos);


export default rotuer;