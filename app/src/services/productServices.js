import api from "./api";

const createProduct = async ({ price, name, description, stock, photos }) => {
  const formData = new FormData();

  formData.append("price", price);
  formData.append("name", name);
  formData.append("description", description);
  formData.append("stock", stock);

  photos.forEach((photo) => {
    formData.append("photos", photo);
  });

  return await api.post("/products", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const getProducts = async () => {
  return await api.get("/products");
};

export { createProduct, getProducts };
