



import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js"


dotenv.config();


mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected successfully");
}).catch((e) => {
    console.log(e)
})


const app =  new express();


app.listen("3000", () => {
    console.log("The server is listening on port 3000!");
})



// app.use("api/user", userRoutes);

// app.get("/", (req, res) => {
//     res.json({
//         msg : "working"
//     })
// })

app.use("/api/user", userRoutes)