const express=require('express')
const { adminLogin, teacherAdd, getTeachers } = require('../controllers/adminLogic')
const upload = require('../middleware/multerMiddleware')


const router =new express.Router()

//admin login
router.post('/admin/login',adminLogin)

//add teacher
router.post('/admin/add-teacher',upload.single('image'),teacherAdd)

//get all teachers
router.get('/admin/get-all-teachers',getTeachers)


module.exports=router