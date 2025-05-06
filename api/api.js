import express from "express";

import authRouter from "./routes/authRouter.js";
import profileRouter from "./routes/profileRouter.js";

const api = express();
// Cargar middlewares de configuración

api.use(express.json());

api.get("/", (req, res) => {
  res.json({
    message: "API Live running",
  });
});

// Registrar todas las rutas acá
api.use("/api/auth", authRouter);
api.use("/api/profile", profileRouter);

export default api;
