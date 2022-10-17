import express from "express";
import {getUsers , AddUsers} from '../controllers/user.controller.js'


const router = express.Router();

router.get('/displayUsers',getUsers);
router.post('/createUser',AddUsers)


export default router;

