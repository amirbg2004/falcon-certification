const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const User = require("../models/protectedAreaModel");

exports.signup = async (req, res) => {
  try {
    // Search for user email in the database.
    const user = await User.findOne({ email: req.body.email });

    // If user exists, return bad request (Don't sign up).
    if (user) return res.status(400).json({ message: "User already exists." });

    // Check if email is valid.
    if (!validator.isEmail(req.body.email))
      return res.status(400).json({ message: "Invalid email format." });

    //Check if password is strong.
    if (!validator.isStrongPassword(req.body.password))
      return res.status(400).json({ message: "Invalid password format." });

    // Hash the entered password to store securely in the database.
    let hashedPassword = await bcrypt.hash(req.body.password, 12);

    // Create new user.
    const newUser = {
      email: req.body.email,
      password: hashedPassword,
      ePortfolio: undefined,
    };

    // Store new user in the database.
    await User.create(newUser);

    return res.status(201).json({ message: "Account successfully created." });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error." });
  }
};
