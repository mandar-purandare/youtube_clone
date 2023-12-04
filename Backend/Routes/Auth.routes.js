import { Router } from "express";
import { Register,Login } from "../Controllers/Auth.controllers.js";

const authRoutes = Router();

authRoutes.post('/register', Register);
authRoutes.post('/login',Login);

export default authRoutes