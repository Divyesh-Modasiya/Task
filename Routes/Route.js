const express = require("express")
const rout = express.Router()
const ctl = require("../controller/Ctl")

rout.get("/",ctl.Home)
rout.post("/send",ctl.AddData)
rout.post("/delete",ctl.DeleteData)
rout.get("/edit",ctl.Edit)

module.exports=rout