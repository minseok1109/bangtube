import express from "express";
import { edit, profile, seeUsers } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/edit-profile", edit);
userRouter.get("/:id", profile);
userRouter.get("/", seeUsers);

export default userRouter;
