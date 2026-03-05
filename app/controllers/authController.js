const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../services/tokenService");

exports.register = async (req, res) => {

  try {
    const { username, password } = req.body;

    const hashed = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      password_hash: hashed
    });

    await user.save();

    res.json(user);

  } catch (error) {
    res.status(500).json(error);
  }

};

exports.login = async (req, res) => {

  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) return res.status(400).json({ message: "User not found" });

  const match = await bcrypt.compare(password, user.password_hash);

  if (!match) return res.status(400).json({ message: "Invalid password" });

  const token = generateToken(user);

  res.json({ token });
};