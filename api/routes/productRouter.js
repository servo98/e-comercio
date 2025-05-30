import { Router } from "express";

import isAuthenticated from "../middlewares/isAuthenticated.js";
import upload from "../middlewares/uploadFile.js";

import {
  productList,
  createProduct,
  productDetail,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const productRouter = Router();

productRouter.get("/", productList);
productRouter.post(
  "/",
  isAuthenticated,
  upload.array("photos", 10),
  createProduct
);
productRouter.get("/:productId", productDetail);
productRouter.put("/:productId", updateProduct);
productRouter.delete("/:productId", deleteProduct);

export default productRouter;
