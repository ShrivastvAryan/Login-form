const express=require("express");
const authControllers=require("");
const signupSchema=require("");
const validate=require("");
const router=express.Router();
const authMiddleware=require("./auth-middleware")

router.route("/").get(authControllers.home);

route.route("/login").post(authControllers.login);

router.route("/user").get(authMiddleware,authControllers.user)


module.exports=router