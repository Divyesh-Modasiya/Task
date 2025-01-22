const Schema = require("../model/Schema")


module.exports.Home=async(req,res)=>{
    data = await Schema.find()
   data && res.render("Home")
}
module.exports.AddData = async(req,res)=>{
    data = await Schema.create(req.body)
    console.log(req.body)
    data && res.redirect("/")
}
module.exports.DeleteData=async(req,res)=>{
    data = await Schema.findByIdAndDelete(req.query.id)
    data && res.redirect("/")
}
module.exports.Edit=(req,res)=>{
    res.redirect("/")
}