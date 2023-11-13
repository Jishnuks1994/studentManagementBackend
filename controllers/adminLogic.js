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

const teacherAdd=async(req,res)=>{
  const image=req.file.filename
  const { name,email,password,mobile,gender,subject,salary}=req.body

  if (!name || !email || !password || !mobile || !gender || !subject || !salary) {

    res.status(404).json("All Inputs Are Required")
  }
  else {

    try {
      let preEmployee = await employees.findOne({ email })

      if (preEmployee) {
        res.status(400).json("Employee is Aleady Present")
      }
      else {
        let newTeacher = new teachers({
          name,
          email,
          password,
          mobile,
          gender,
          subject,
          salary,
          image
        })
        await newTeacher.save()
        res.status(200).json(name)

      }
    }
    catch {
      res.status(400).json("network error")
    }

  }
}

module.exports={
    adminLogin,
    teacherAdd
}