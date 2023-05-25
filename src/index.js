const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const connectDB = require("./connectDB.js");
const {
    router
}= require("./routes/route.js")
const {userRouter} = require("./routes/user.route.js")


const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());


// Conect DB
connectDB(app, 4001, "mongodb://localhost:27017/gifts");

//Routes 
app.use("/gif", router)
app.use("/user", userRouter)
// app.use("/albums", albumRouter)
// app.use("/songs", songRouter)
// app.use("/users", userRouter)
// app.use("/mixes", mixesRouter)
// app.use("/genres", genreRouter)
// app.use("/playlists", playlistsRouter)