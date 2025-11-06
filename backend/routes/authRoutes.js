import express from "express";
import { signup, login, getProfile } from "../controllers/authController.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/profile", auth, getProfile); // protected route

export default router;
