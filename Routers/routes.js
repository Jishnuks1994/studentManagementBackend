const express=require('express')
const { adminLogin, teacherAdd, getTeachers, showTeacher, editTeacher, studentAdd, getStudents, teacherLogin, addClass, editClass } = require('../controllers/adminLogic')
const upload = require('../middleware/multerMiddleware')


const router =new express.Router()

//admin login
router.post('/admin/login',adminLogin)
//teacher login
router.post('/teacher/login',teacherLogin)

//add teacher
router.post('/admin/add-teacher',upload.single('image'),teacherAdd)

//get all teachers
router.get('/admin/get-all-teachers',getTeachers)

//show teacher
router.get('/admin/show-teacher/:id',showTeacher)

//edit teacher
router.put('/admin/edit-teacher',editTeacher)

//add student
router.post('/admin/add-student',upload.single('image'),studentAdd)

//get all students
router.get('/admin/get-all-students',getStudents)

//add class
router.post('/admin/add-class',addClass)

//edit class
router.put('/admin/edit-class',editClass)

module.exports=router