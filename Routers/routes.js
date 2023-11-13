const express=require('express')
const { adminLogin, teacherAdd } = require('../controllers/adminLogic')
const upload = require('../middleware/multerMiddleware')


const router =new express.Router()

//admin login
router.post('/admin/login',adminLogin)

//add teacher
// router.post('/admin/add-teacher',upload.single('image'),teacherAdd)



module.exports=router