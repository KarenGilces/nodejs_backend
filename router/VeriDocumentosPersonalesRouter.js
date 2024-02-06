import express from 'express';
import { getVeriDocumentosPersonales,createVeriDocumentosPersonales,
    updateVeriDocumentosPersonales,deleteVeriDocumentosPersonales} 
from '../controller/VeriDocumentosPersonalesController..js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();

rotuer.get('/veri/documento',verifyToken, getVeriDocumentosPersonales);
rotuer.post('/veri/documento',verifyToken,  createVeriDocumentosPersonales);
rotuer.put('/veri/documento/:id', verifyToken, updateVeriDocumentosPersonales);
rotuer.delete('/veri/documento/:id',verifyToken,  deleteVeriDocumentosPersonales);


export default rotuer;