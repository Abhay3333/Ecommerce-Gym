import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
import connectDB from './config/db.js';
import authRoutes from './routes/authroutes.js';
import cors from 'cors'


//configure dotenv
dotenv.config();

//database config
connectDB();

//rest object 
const app = express();

//middleware
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use("/api/v1/auth", authRoutes);

//rest api
app.get('/', (req,res) => {
    res.send("<h1>Welcome to my ecommerce webappp</h1>");
});

//port
const port = process.env.port;

//run listen
app.listen(port, () => {
    console.log(`Server Running on ${port}`.bgCyan.white);
});

