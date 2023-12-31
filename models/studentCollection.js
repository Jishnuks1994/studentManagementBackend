const mongoose=require('mongoose')

const studentsSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true

    },
    
    dob:{
        type:String,
        trim:true,
        required:true

    },
    gender:{
        type:String,
        trim:true,
        required:true

    },
    blood_type:{
        type:String,
        trim:true,
        required:true

    },
    reg_no:{
        type:String,
        trim:true,
        unique:true,
        required:true,

    },
    class_name:{
        type:String,
        trim:true,
        required:true

    },
    guardian_name:{
        type:String,
        trim:true,
        required:true

    },
    mobile:{
        type:String,
        trim:true,
        unique:true,
        required:true,
        minlength:10,
        maxlength:13

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
    address:{
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
    },
    progress_card:{
        type:Array,
        trim:true
    },
})

const students=new mongoose.model('students',studentsSchema)
module.exports=students