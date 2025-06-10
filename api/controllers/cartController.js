import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

const getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({
      user: req.userId,
    });

    if (!cart) {
      cart = await Cart.create({
        user: req.userId,
      });
    }

    const tempCart = await cart.populate("items.product");

    return res.json({
      cart: tempCart,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error al obtener tu carrito",
    });
  }
};

const addToCart = async (req, res) => {
  try {
    // Extraemos el userId de req gracias al middleware isAuthenticated
    const { userId } = req;

    // Buscamos si ya tiene un carrito el usuario
    let cart = await Cart.findOne({
      user: userId,
    });

    // Si no tienen un carrito le creamos uno
    if (!cart) {
      cart = await Cart.create({
        user: userId,
      });
    } else {
      // Si ya tenía carrito, buscamos que no exista ese item en el arreglo de items
      const productAlready = cart.items.some((item) => {
        return item.product.toString() === req.body.productId;
      });

      // Si ya existía ese producto en el arreglo mandamos error
      if (productAlready) {
        throw new Error("Este producto ya existe en el carrito");
      }
    }

    // Buscamos que el producto que intenta registrar exista en la BD
    const product = await Product.findById(req.body.productId);

    // Si no existe ese producto retornamos error
    if (!product) {
      throw new Error("Producto no encontrado");
    }

    // Creamos un item temporal para agregarlo al arreglo del carrito creado o encontrado (carrito)
    const item = {
      product: product._id,
      price: product.price,
      quantity: req.body.quantity,
    };

    // Se lo agregamos al carrito
    cart.items.push(item);

    //TODO: calcular nuevo total

    const total = cart.items.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);

    cart.total = total;

    // Guardamos en la BD el cambio del arreglo items
    await cart.save();

    // Retornamos el carrito como haya quedado
    return res.json({
      cart,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error en addToCart",
    });
  }
};

const updateCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      user: req.userId,
    });

    if (!cart) {
      return res.status(404).json({
        message: "Carrito no encontrado para actualizar",
      });
    }

    /**
     * req.body {
     *
     *  items: [{
     *    productId,
     *    quantity
     *  }]
     * }
     *  ->
     * [{
     *  product
     *  price
     *  quantity
     * }]
     *
     *
     */

    const products = await Promise.all(
      req.body.items.map((item) => {
        return Product.findById(item.productId).select("price");
      })
    );

    const newItems = products.map((product, index) => {
      return {
        product: product._id,
        price: product.price,
        quantity: req.body.items[index].quantity,
      };
    });

    cart.items = newItems;
    cart.total = cart.items.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);

    await cart.save();

    return res.json({
      cart,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error en updateCart",
    });
  }
};

export { addToCart, updateCart, getCart };
