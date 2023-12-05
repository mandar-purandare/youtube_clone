import { Router } from "express";
import { Register,Login,GetCurrentUser } from "../Controllers/Auth.controllers.js";

const authRoutes = Router();

authRoutes.post('/register', Register);
authRoutes.post('/login',Login);
authRoutes.get('/get-current-user', GetCurrentUser)

export default authRoutes