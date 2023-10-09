import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from "./routes/authRoute.js";


// configure env
dotenv.config();

// database config
connectDB();

// rest object
const app = express();  

// middlewares
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use("/api/v1/auth", authRoutes);

// rest api
app.get("/",(req,res) => {
    res.send("<h1>Hello")
})


app.listen(process.env.PORT, () => {
    console.log("Server running on",process.env.PORT)
})