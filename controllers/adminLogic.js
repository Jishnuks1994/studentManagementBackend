const admins = require('../models/adminCollection')
const teachers = require('../models/teacherCollection')
const students = require('../models/studentCollection')

//admin login
const adminLogin = async (req, res) => {
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

const teacherAdd = async (req, res) => {
  if (!req.file) {
    return res.status(400).json("Image file is required");
  }

  const image = req.file.filename;
  const { name, email, password, mobile, gender, subject, salary } = req.body;

  // return res.status(200).json()

  if (!name || !email || !password || !mobile || !gender || !subject || !salary || !image) {
    return res.status(400).json("All inputs are required");
  }

  try {
    let preTeacher = await teachers.findOne({ email });

    if (preTeacher) {
      return res.status(400).json("Teacher is already present");
    }

    let newTeacher = new teachers({
      name,
      email,
      password,
      mobile,
      gender,
      subject,
      salary,
      image,
    });

    await newTeacher.save();
    res.status(200).json(name);
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
};


const getTeachers=async (req,res)=>{
  // try {
    const result = await teachers.find()
    res.status(200).json(result)

  // }
  // catch {
  //   res.status(400).json("network error")
  // }
} 

module.exports = {
  adminLogin,
  teacherAdd,
  getTeachers
}