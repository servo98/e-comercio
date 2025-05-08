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

const updateProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.userId, req.body, {
      new: true,
    }).select("-password");

    return res.json({
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error al editar datos de perfil",
    });
  }
};

const profileProducts = async (req, res) => {};

export { getProfile, updateProfile, profileProducts };
