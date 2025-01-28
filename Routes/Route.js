const express = require("express")
const rout = express.Router()
const ctl = require("../controller/Ctl")
const multer = require("../multer/multer")

rout.get("/",multer,ctl.Home)
rout.post("/send",multer,ctl.AddData)
rout.get("/delete",multer,ctl.DeleteData)
rout.get("/editData",multer,ctl.Edit)
rout.post("/update",multer,ctl.UpdateData)

module.exports=rout