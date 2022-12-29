const express= require("express")
const app =express()
const mongoose =require('mongoose')
const dotenv = require("dotenv").config({ path: "./config/.env" });

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(console.log('DataBase connected'))
.catch((err) => console.log(err))


app.use(express.json());
app.use("/user", require("./routes/userRoutes"));

const port = process.env.port
app.listen(port,(err)=> err ? console.log(err) : console.log("server is running"))