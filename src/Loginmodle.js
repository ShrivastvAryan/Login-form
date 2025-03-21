const {Schema, model}= require('mongoose'); //here done destructure

const loginSchema=new Schema({
    email:{type:String, required: true},
    message:{type:String, required:true},
});

//create a model or a collection

const Login=new model('Login', loginSchema);

module.exports={Login,User};


//json web token 

userSchema.methods.generateToken=async function(){
    try {
        return jwt.sign(
            {
                userId:this._id.toString(),
                email: this.email,
                isAdmin:this.isAdmin,
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn:"30d",
            }
        );
        
    } catch (error) {
        console.error(error)
    }
};

const User =new mongoose.model("User",userSchema);
