const express = require("express");
const router = express.Router();
const { gifController } = require("../controllers/gif.controller")

const {createGif, getAll} = gifController


router
    .get("/all", getAll)
    .post("/create", createGif)

module.exports = {router};