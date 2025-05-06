import User from "../models/User.js";

const register = async (req, res) => {
  try {
    console.log(req.body);

    const user = await User.create(req.body);

    res.status(201).json({
      message: "Usuario creado",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error al crear usuario",
    });
  }
};

const login = (req, res) => {};

export { register, login };
