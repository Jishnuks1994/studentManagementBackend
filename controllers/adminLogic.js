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

//add teacher
const teacherAdd = async (req, res) => {
  if (!req.file) {
    return res.status(400).json("Image file is required");
  }

  const image = req.file.filename;
  const { name, email, password, mobile, gender, subject, salary } = req.body;


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

//get all teachers
const getTeachers=async (req,res)=>{
  try {
    const result = await teachers.find()
    res.status(200).json(result)

  }
  catch {
    res.status(400).json("network error")
  }
} 

//edit teacher
const showTeacher = async (req, res) => {
  const {id} = req.params

  try {
    const result = await teachers.findOne({ _id:id });
    
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("Teacher Not Found");
    }
  } catch{
    
    res.status(500).json("network error");
  }
};

//edit teacher
const editTeacher = async (req, res) => {
  // if (!req.file) {
  //   return res.status(400).json("Image file is required");
  // }

  // const image = req.file.filename;
  const { name, email, password, mobile, gender, subject, salary,image,_id } = req.body;

  // const{name,email}=req.body


  // if (!name || !email || !password || !mobile || !gender || !subject || !salary || !image) {
  //   return res.status(400).json("All inputs are required");
  // }

  try {
    let preTeacher = await teachers.findOne({ _id });

    if (preTeacher) {
      preTeacher.name=name
      preTeacher.email=email
      preTeacher.password=password
      preTeacher.mobile=mobile
      preTeacher.gender=gender
      preTeacher.subject=subject
      preTeacher.salary=salary
      preTeacher.image=image

      await preTeacher.save()
      return res.status(200).json("edited")
      
    }
    else{
      return res.status(400).json("Teacher is not present in Database");
    }

  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
};



module.exports = {
  adminLogin,
  teacherAdd,
  getTeachers,
  showTeacher,
  editTeacher
}