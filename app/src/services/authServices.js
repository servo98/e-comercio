import api from "./api";

const register = async ({
  firstName,
  lastName,
  birthday,
  address,
  phone,
  username,
  email,
  password,
}) => {
  return await api.post("/auth/register", {
    firstName,
    lastName,
    birthday,
    address,
    phone,
    username,
    email,
    password,
  });
};

const login = async ({ credential, password }) => {
  return await api.post("/auth/login", {
    credential,
    password,
  });
};

export { register, login };
