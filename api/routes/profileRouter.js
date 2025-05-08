import { Router } from "express";

import {
  getProfile,
  updateProfile,
  profileProducts,
} from "../controllers/profileController.js";

import isAuthenticated from "../middlewares/isAuthenticated.js";

const profileRouter = Router();

profileRouter.get("/", isAuthenticated, getProfile);
profileRouter.put("/", isAuthenticated, updateProfile);
profileRouter.get("/:userId", profileProducts);

export default profileRouter;
