import express from 'express';
import {register,login,logout,authUser,forgetPassword,resetPasswordcon} from '../controller/CustomerControl.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();
 
router.post('/register', register);
router.post('/login', login);
router.get('/logout',auth,logout);
router.get('/auth',auth,authUser);
router.post('/forgetPassword',forgetPassword);
router.put('/resetPassword/:token',resetPasswordcon);

export default router;