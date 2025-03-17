const {Schema, model}= require('mongoose'); //here done destructure

const loginSchema=new Schema({
    email:{type:String, required: true},
    message:{type:String, required:true},
});

//create a model or a collection

const Login=new model('Login', loginSchema);

module.exports=Login;
