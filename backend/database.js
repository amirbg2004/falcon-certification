const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connected!");
    return true;
  } catch (error) {
    console.log("Database connection failed.");
    return false;
  }
};
