const mongoose=require('mongoose')

const classesSchema=new mongoose.Schema({
    standard:{
        type:String,
        trim:true,
        required:true
    },
    division:{
        type:String,
        trim:true,
        required:true
    },
    teacher:{
        type:String,
        trim:true,
        required:true
    }
})


const classes=new mongoose.model('classes',classesSchema)
module.exports=classes