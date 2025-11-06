// backend/routes/userRoutes.js
import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Get all users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Get a specific user
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

export default router;
