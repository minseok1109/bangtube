import express from "express";
import { deleteVideo } from "../controllers/videoController.js";

const videoRouter = express.Router();

videoRouter.get("/:id/delete", deleteVideo);

export default videoRouter;
