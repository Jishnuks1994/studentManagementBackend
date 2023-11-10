const mongoose=require('mongoose')


const adminSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true

    },
    email:{
        type:String,
        unique:true,
        trim:true,
        required:true

    },
    password:{
        type:String,
        required:true,
        trim:true
    },

})
const admins=new mongoose.model('admins',adminSchema)

module.exports=admins