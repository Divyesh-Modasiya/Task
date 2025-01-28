const express = require("express")
const port = 8000
const db = require("./config/db");
const path = require("path")
const app = express()
app.set("view engine","ejs");

app.use(express.urlencoded())

app.use("/",require("./Routes/Route"))
app.use("uploads/",express.static(path.join(__dirname,"uploads")))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started at " + port );
})