import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import router from "./Routes/index.js";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
dotenv.config();
app.use(morgan('dev'));
app.use(cors());
app.use('/api/v1', router);


app.get('/', (req,res) => {res.send('Welcome to Youtube backend')})

mongoose.connect(process.env.MONGO_URL).then(() => {console.log('database connected')});

app.listen(8000, () => {console.log('Listening on port 8000')})