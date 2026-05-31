import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import dns from "dns"
import userRouter from './routes/user.route.js';
import notesRouter from './routes/generate.route.js';
import pdfRouter from './routes/pdf.route.js';
import creditsRouter from './routes/credits.route.js';

/**
 * @description To change dns
 */
dns.setServers(["1.1.1.1","8.8.8.8"])

dotenv.config();

const app=express();
app.use(express.urlencoded({ extended: true }));

app.use(cors(
    {
        origin:"http://localhost:5173",
        credentials:true,
        methods:["GET","POST","PUT","DELETE","OPTIONS"]
    }
))


app.use(express.json())
app.use(cookieParser())

const PORT=process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("hello");
})

app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);
app.use("/api/notes",notesRouter);
app.use("/api/pdf",pdfRouter);
app.use("/api/credits",creditsRouter);

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    connectDB(); 
})
