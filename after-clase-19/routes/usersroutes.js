import express from "express";
import * as UsersControllers from '../controllers/user.controlers.js'

const router = express.Router();


router.post('/', UsersControllers.createUser);


export default router;