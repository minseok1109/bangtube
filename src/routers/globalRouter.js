import express from "express";
import {join, login} from "../controllers/userController.js";
import {see, trending} from "../controllers/videoController.js";

const globalRouter = express.Router();

globalRouter.get('/', trending);
globalRouter.get('/join', join);
globalRouter.get('/trending', see);
globalRouter.get('/login', login);


export default globalRouter;