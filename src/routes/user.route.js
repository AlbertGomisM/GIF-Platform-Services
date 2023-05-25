const express = require("express");
const userRouter = express.Router();
const { userController } = require("../controllers/user.controller")

const {createUser, getAllUsers, getByemail} = userController


userRouter
    .post("/create/:email/:password", createUser)
    .get("/all", getAllUsers)
    .get("/email/:email", getByemail)

module.exports = {userRouter};