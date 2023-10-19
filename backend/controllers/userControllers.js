import User from "../models/User.js";

export const createUser = async (req, res) => {
    const newUser = new User(req.body);

    try {
        const savedUser = await newUser.save();

        res.status(200).json({
            success: true,
            message: "Perfil creado",
            data: savedUser,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "No se pudo crear, intente de nuevo",
        });
    }
};

export const updateUser = async (req, res) => {
    const id = req.params.id;

    try {
        const updateUser = await User.findByIdAndUpdate(
            id,
            {
                $set: req.body,
            },
            { new: true }
        );

        if (!updateUser) {
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado",
            });
        }

        res.status(200).json({
            success: true,
            message: "Perfil actualizado",
            data: updateUser,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "No se pudo actualizar, intente de nuevo",
        });
    }
};

export const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado",
            });
        }

        res.status(200).json({
            success: true,
            message: "Perfil eliminado",
            data: deletedUser,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "No se pudo eliminar, intente de nuevo",
        });
    }
};
