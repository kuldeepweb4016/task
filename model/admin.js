const mongoose = require('mongoose')
const adminSchema= mongoose.Schema({
    mail:String,
    password:String
})
 
module.exports = mongoose.model('Admin',adminSchema)