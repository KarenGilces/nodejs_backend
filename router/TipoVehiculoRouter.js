import express from 'express';
import { getTipoVehiculo,createTipoVehiculo,
    updateTipoVehiculo,deleteTipoVehiculo} 
from '../controller/TipoVehiculoController.js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();

rotuer.get('/tipoVehiculo',verifyToken, getTipoVehiculo);
rotuer.post('/tipoVehiculo',verifyToken, createTipoVehiculo);
rotuer.put('/tipoVehiculo/:id',verifyToken, updateTipoVehiculo);
rotuer.delete('/tipoVehiculo/:id',verifyToken,  deleteTipoVehiculo);


export default rotuer;