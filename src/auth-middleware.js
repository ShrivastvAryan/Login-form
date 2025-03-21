const jwt=require("jsonwebtoken");
const User=require("/Loginmodle")
const authMiddleware=async(req,res,next)=>{
    const token=req.header('Authorisation');

    if(!token){
        return res.status(401).json({message:"Unauthorised HTTP, token not possible"});
    }

    console.log("token form auth middleware",token);

    const jwtToken= token.replace('Bearer',"").trim();

    try {

        const isVerified = jwt.verify(jwtToken,process.env.JWT_SECRET_KEY);
       
        const userData=await User.findOne({email:isVerified.email});
        select({
            password:0,
        });

        req.user=userData;
        req.token=token;
        req.userId=userData._id;

        console.log(userData);
        next();
    } catch (error) {
        return res.status(401).json({message:"Unauthorised Invalid Token"});
    }

};

module.exports= authMiddleware
