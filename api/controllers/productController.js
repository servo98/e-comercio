import Product from "../models/Product.js";

const productList = async (req, res) => {
  try {
    const products = await Product.find();

    return res.json({
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error al obtener el catálogo de productos",
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const { files } = req;

    const photos = files ? files.map((file) => file.path) : [];

    const product = await Product.create({
      ...req.body,
      photos,
      user: req.userId,
    });

    return res.json({
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error al registrar un nuevo producto",
    });
  }
};

const productDetail = async (req, res) => {};
const updateProduct = async (req, res) => {};
const deleteProduct = async (req, res) => {};

export {
  productList,
  createProduct,
  productDetail,
  updateProduct,
  deleteProduct,
};
