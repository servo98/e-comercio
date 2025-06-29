import express from "express";

import authRouter from "./routes/authRouter.js";
import profileRouter from "./routes/profileRouter.js";
import productRouter from "./routes/productRouter.js";
import cartRouter from "./routes/cartRouter.js";

import cors from "cors";

const api = express();

// Cargar middlewares de configuración

api.use(cors());

api.use(express.json());

api.get("/", (req, res) => {
  res.json({
    message: "API Live running v4",
  });
});

// Registrar todas las rutas acá
api.use("/api/auth", authRouter);
api.use("/api/profile", profileRouter);
api.use("/api/products", productRouter);
api.use("/api/cart", cartRouter);

export default api;
