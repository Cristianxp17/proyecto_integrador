import express from "express";
import dotenv from "dotenv";
import mongoose from 'mongoose';
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoute from "./routes/users.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Database connection
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB está conectada");
    } catch (err) {
        console.error("La conexión a MongoDB falló:", err);
    }
}

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/users", userRoute)

// Define a simple route
app.get("/", (req, res) => {
    res.send("¡La API está en funcionamiento!");
});

// Start the server
app.listen(port, () => {
    connect();
    console.log("El servidor está escuchando en el puerto", port);
});
