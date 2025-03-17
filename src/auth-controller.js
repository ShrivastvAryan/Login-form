const login=async (req,res)=>{
    try{
        const{email,password}=req.body;


        const userExist= await User.findOne({email});

        if(!userExist){
            return res.status(400).json({message:"Invalid credentials"})
        }

        //const user=await bcrypt.compare(password,userExist.password);

        const user= await userExist.comparePassword(password)

        if(user){
            res.status(200).json({msg:"Login successful",
                token: await userExist.generateToken(), 
                userId:userExist._id.toString(), 
            });
        }
        else{
            res.status(401).json({message:"Invalid email or password"})
        }


    }catch(error){
        res.status(500).json("internal server error")
    }
}



module.exports=login;
