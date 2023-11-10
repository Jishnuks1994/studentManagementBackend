const admins=require('../models/adminCollection')
const teachers=require('../models/teacherCollection')
const students=require('../models/studentCollection')

//admin login
const adminLogin=async(req,res)=>{
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400).json("all datas are required")
      }
      else {
        try {
          const admin = await admins.findOne({ email, password })
          if (admin) {
            res.status(200).json(admin)
          }
          else {
            res.status(404).json('Incorrect Credentials')
          }
        }
        catch {
          res.status(400).json("connection error")
        }
      }
    
}

module.exports={
    adminLogin
}