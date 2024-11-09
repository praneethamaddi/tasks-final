const express = require("express")
const userRouter = express.Router();

const {signup, signin, profile } = require("../controllers/userControllers");

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.get("/profile/:userId", profile);


module.exports = {userRouter};