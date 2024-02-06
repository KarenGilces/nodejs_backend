import express from 'express';
import { getPermission,createPermission,updatePermission,deletePermission} 
from '../controller/permissionController.js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();

rotuer.get('/type/permission',verifyToken, getPermission);
rotuer.post('/type/permission',createPermission);
rotuer.put('/type/permission/:id',verifyToken, updatePermission);
rotuer.delete('/type/permission/:id',verifyToken,  deletePermission);


export default rotuer;