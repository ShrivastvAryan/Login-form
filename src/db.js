const mongoose=require("mongoose");

const URI=process.env.MONGODB_URI // for connecting with dotenv

const connectDb= async()=>{
    try{
        await mongoose.connect(URI);
        console.log("connection successful to database")
    }
    catch{
        console.error("data base connection failed");
        process.exit(0);
    }
}

module.exports=connectDb