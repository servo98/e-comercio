import api from "./api";

const getCart = async () => {
  return api.get("/cart");
};
const addToCart = async (productId, quantity) => {
  return api.post("/cart", {
    quantity,
    productId,
  });
};

// TODO create update cart service

/**
 *
 * items: [{
 *    productId,
 *    quantity
 *  }]} items
 */
const updateCart = async (items) => {
  return api.put("/cart", {
    items,
  });
};

export { getCart, addToCart, updateCart };
