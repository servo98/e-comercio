import { Router } from "express";
import { register, login } from "../controllers/authController.js";

const authRouter = Router();
// Registrar rutas de auth

authRouter.post("/register", register);
authRouter.post("/login", login);

export default authRouter;
