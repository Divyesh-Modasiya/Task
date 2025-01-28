const Schema = require("../model/Schema")
const path = require("path")
const fs = require("fs")

module.exports.Home=async(req,res)=>{
    data = await Schema.find()
   data && res.render("Home")
}
module.exports.AddData = async(req,res)=>{
    req.body.image = req.file.path
    data = await Schema.create(req.body)
    data && res.redirect("/") 
}
module.exports.DeleteData=async(req,res)=>{
    let singleData = await Schema.findById(req.query.id)
    fs.unlinkSync(singleData.image)
    data = await Schema.findByIdAndDelete(req.query.id)
    data && res.redirect("/")
}
module.exports.Edit= async (req,res)=>{
    data = await Schema.findById(req.query.id).then((data)=>{
        res.render("Edit",{data})
    })   
}

module.exports.UpdateData=async(req,res)=>{
    let img = ""
    let singleData = await Schema.findById(req.body.id)
    req.file ? img = req.file.path : img = singleData.image
    req.file && fs.unlinkSync(singleData.image)
    req.body.imag = img
    data = await Schema.findByIdAndUpdate(req.body.id,req.body).then((data)=>{
        res.redirect("/")
    })
}