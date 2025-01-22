const mongoose = require("mongoose")

let Data = mongoose.Schema({
    username:{
        type:String
    },
    principleamount:{
        type:String
    },
    month:{
        type:String
    },
    intrest:{
        type:String
    }
})
const AdminData = mongoose.model("TaskData",Data)

module.exports = AdminData