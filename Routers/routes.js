const express=require('express')
const { adminLogin } = require('../controllers/adminLogic')


const router =new express.Router()

router.post('/admin/login',adminLogin)



module.exports=router