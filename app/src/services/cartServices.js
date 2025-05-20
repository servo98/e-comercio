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
const updateCart = async (params) => {
  return api;
};

export { getCart, addToCart, updateCart };
