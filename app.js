import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';

const app = express();
dotenv.config({path: './config/config.env'});
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    credentials:true,
    methods:["GET,HEAD,PUT,DELETE"],
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:'/tmp/'
    })
)
export default app;