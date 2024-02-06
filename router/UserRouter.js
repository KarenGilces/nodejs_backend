import express from 'express';
import { login,updateUsersPassword, updateUsersEmail, getUsers,createUsers,getTodosUsuarios,updateUsers,deleteUsers} from '../controller/UserController.js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();

rotuer.get('/user', getUsers);
rotuer.get('/users', getTodosUsuarios);
rotuer.post('/user', createUsers);
rotuer.put('/user/:id',verifyToken, updateUsers);
rotuer.delete('/user/:id', verifyToken, deleteUsers);
rotuer.post('/login', login);
rotuer.put('/user/email/:id',verifyToken, updateUsersEmail);
rotuer.put('/user/password/:id',verifyToken, updateUsersPassword);
export default rotuer;