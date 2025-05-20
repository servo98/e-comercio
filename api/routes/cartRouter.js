import { Router } from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  addToCart,
  getCart,
  updateCart,
} from "../controllers/cartController.js";

const cartRouter = Router();

cartRouter.get("/", isAuthenticated, getCart);
cartRouter.post("/", isAuthenticated, addToCart);
cartRouter.put("/", isAuthenticated, updateCart);

export default cartRouter;
