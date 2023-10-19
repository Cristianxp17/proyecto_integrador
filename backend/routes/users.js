import express from "express";
import { updateUser, deleteUser } from "../controllers/userControllers.js";

const router = express.Router();

// Ruta para actualizar un usuario
router.put("/:id", updateUser);

// Ruta para eliminar un usuario
router.delete("/:id", deleteUser);

export default router;
