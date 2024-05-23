const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()


const port = process.env.PORT || 3000
app.use(cors())
app.use(express.json())

app.use("/api/refreshToken", require("./routes/refreshToken"))
app.use("/api/signout", require("./routes/signout"))
app.use("/api/signup", require("./routes/signup"))
app.use("/api/login", require("./routes/login"))
app.use("/api/todos", require("./routes/todos"))
app.use("/api/user", require("./routes/user"))


app.get("/", (req, res)=>{
    res.send("welcome to my api")
})


app.listen(port, ()=>{
    console.log("Server listening on port ", port)
})