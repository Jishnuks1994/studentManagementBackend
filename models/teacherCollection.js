const mongoose=require('mongoose')

const teachersSchema=new mongoose.Schema({
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
    mobile:{
        type:String,
        trim:true,
        unique:true,
        required:true,
        minlength:10,
        maxlength:13

    },
    gender:{
        type:String,
        trim:true,
        required:true

    },
    subject:{
        type:String,
        trim:true,
        required:true

    },
    salary:{
        type:String,
        trim:true,
        required:true

    },
    image:{
        type:String,
        trim:true,
        required:true

    },
    attendance:{
        type:Array,
        trim:true,
        required:true

    },
})

const teachers=new mongoose.model('teachers',teachersSchema)
module.exports=teachers