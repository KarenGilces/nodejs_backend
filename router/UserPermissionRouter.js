import express from 'express';
import { getUserPermission,createUserPermission,updateUserPermission,deleteUserPermission} from '../controller/UserPermissionController.js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();

rotuer.get('/users/permisson',verifyToken, getUserPermission);
rotuer.post('/users/permisson',verifyToken, createUserPermission);
rotuer.put('/users/permisson/:id',verifyToken, updateUserPermission);
rotuer.delete('/users/permisson/:id',verifyToken,  deleteUserPermission);


export default rotuer;