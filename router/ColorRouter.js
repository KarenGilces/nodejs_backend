import express from 'express';
import { getColor,createColor,
    updateColor,deleteColor} 
from '../controller/ColorController.js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();

rotuer.get('/color',verifyToken,  getColor);
rotuer.post('/color',verifyToken,  createColor);
rotuer.put('/color/:id',verifyToken, updateColor);
rotuer.delete('/color/:id',verifyToken,   deleteColor);


export default rotuer;