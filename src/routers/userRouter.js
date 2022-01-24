import express from "express";
import { edit, profile } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/edit-profile", edit);
userRouter.get("/:id", profile);

export default userRouter;
