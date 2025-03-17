const express=require("express");
const authControllers=require("");
const signupSchema=require("");
const validate=require("");


router.route("/").get(authControllers.home);
router.route("/register").post(authControllers.register);

route.route("/login").post(authControllers.login);

module.exports=router