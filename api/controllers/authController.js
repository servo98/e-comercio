import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const userFound = await User.findOne({
      $or: [
        { email: req.body.email },
        { phone: req.body.phone },
        { username: req.body.username },
      ],
    });

    if (userFound) {
      return res.status(400).json({
        message: "El usuario ya existe",
      });
    }

    const password = bcrypt.hashSync(req.body.password, 10);
    req.body.password = password;
    const user = await User.create(req.body);

    user.password = undefined;

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

const login = async (req, res) => {
  try {
    const { credential, password } = req.body;

    console.log(credential, password);

    const user = await User.findOne({
      $or: [
        { email: credential },
        { phone: credential },
        { username: credential },
      ],
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const passwordMatch = bcrypt.compareSync(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    // Crear un token y se lo mandamos al cliente

    const payload = {
      userId: user.id,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    res.json({
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error al hacer login",
    });
  }
};

export { register, login };
