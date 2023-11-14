const express=require('express')
const { adminLogin, teacherAdd, getTeachers, showTeacher, editTeacher } = require('../controllers/adminLogic')
const upload = require('../middleware/multerMiddleware')


const router =new express.Router()

//admin login
router.post('/admin/login',adminLogin)

//add teacher
router.post('/admin/add-teacher',upload.single('image'),teacherAdd)

//get all teachers
router.get('/admin/get-all-teachers',getTeachers)

//show teacher
router.get('/admin/show-teacher/:id',showTeacher)

//edit teacher
router.put('/admin/edit-teacher',editTeacher)

module.exports=router