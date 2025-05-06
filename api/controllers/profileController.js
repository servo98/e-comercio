import User from "../models/User.js";

const getProfile = async (req, res) => {
  // TODO: de dónde sacamos el userId de token, de dónde sacamos el token

  try {
    const user = await User.findById(req.userId).select("-password");

    return res.json({
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error al obtener datos de perfil",
    });
  }
};

const updateProfile = async (req, res) => {};

const profileProducts = async (req, res) => {};

export { getProfile, updateProfile, profileProducts };
