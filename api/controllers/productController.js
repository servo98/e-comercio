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

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const productDetail = async (req, res) => {
  try {
    const { productId } = req.params;

    // TODO: validar id
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.json({
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error al obtener detalle producto",
    });
  }
};
const updateProduct = async () => {};
const deleteProduct = async () => {};

export {
  productList,
  createProduct,
  productDetail,
  updateProduct,
  deleteProduct,
};
