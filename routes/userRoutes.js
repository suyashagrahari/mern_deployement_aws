const express = require("express");
const Yash = require("../models/User");
const router = express.Router();

// POST route to add a new user
router.post("/add", async (req, res) => {
  const { name, email } = req.body;

  try {
    const newUser = new Yash({ name, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// GET route to fetch all users
router.get("/all", async (req, res) => {
  try {
    const users = await Yash.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
