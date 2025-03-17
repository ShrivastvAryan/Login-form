require("dotenv").config();

const express=require("express");
const cors =require("cors");
const app=express();
const authRoute=require("./auth-router");
const contactRoute=require("./db");
const errorMiddleware=require("./error-middleware");

const corsOptions={
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);

app.use(errorMiddleware);

const PORT=5000;

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running at ${PORT}`)
    })
})