// formData.js
const express = require("express");
const router = express.Router();
const FormData = require("../models/formData");

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const formData = new FormData({ name, email, message });
    await formData.save();

    res.status(201).json({ message: "Form data saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;

