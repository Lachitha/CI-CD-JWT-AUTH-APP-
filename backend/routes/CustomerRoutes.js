import express from 'express';
import {register,login,logout} from '../controller/CustomerControl.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();
 
router.post('/register', register);
router.post('/login', login);
router.get('/logout',auth,logout);

export default router;