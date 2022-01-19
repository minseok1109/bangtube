import express from "express";
import { join, login } from "../controllers/userController.js";
import { home, watch } from "../controllers/videoController.js";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/trending", watch);
globalRouter.get("/login", login);

export default globalRouter;
