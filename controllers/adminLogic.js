const admins = require('../models/adminCollection')
const teachers = require('../models/teacherCollection')
const students = require('../models/studentCollection')
const classes = require('../models/classCollections')


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

//teacher login
const teacherLogin = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    res.status(400).json("all datas are required")
  }
  else {
    try {
      const teacher = await teachers.findOne({ email, password })
      if (teacher) {
        res.status(200).json(teacher)
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
const getTeachers = async (req, res) => {
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
  const { id } = req.params

  try {
    const result = await teachers.findOne({ _id: id });

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("Teacher Not Found");
    }
  } catch {

    res.status(500).json("network error");
  }
};

//edit teacher
const editTeacher = async (req, res) => {
  // if (!req.file) {
  //   return res.status(400).json("Image file is required");
  // }

  // const image = req.file.filename;
  const { name, email, password, mobile, gender, subject, salary, image, _id } = req.body;

  // const{name,email}=req.body


  // if (!name || !email || !password || !mobile || !gender || !subject || !salary || !image) {
  //   return res.status(400).json("All inputs are required");
  // }

  try {
    let preTeacher = await teachers.findOne({ _id });

    if (preTeacher) {
      preTeacher.name = name
      preTeacher.email = email
      preTeacher.password = password
      preTeacher.mobile = mobile
      preTeacher.gender = gender
      preTeacher.subject = subject
      preTeacher.salary = salary
      preTeacher.image = image

      await preTeacher.save()
      return res.status(200).json("edited")

    }
    else {
      return res.status(400).json("Teacher is not present in Database");
    }

  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
};


//add student
const studentAdd = async (req, res) => {
  if (!req.file) {
    return res.status(400).json("Image file is required");
  }

  const image = req.file.filename;
  const { name, dob, gender, blood_type, reg_no, class_name, guardian_name, mobile, email, password, address } = req.body;


  if (!name || !dob || !gender || !blood_type || !reg_no || !class_name || !guardian_name || !mobile || !email || !password || !image || !address) {
    return res.status(400).json("All inputs are required");
  }

  try {
    let preStudent = await students.findOne({ email });

    if (preStudent) {
      return res.status(400).json("Student is already Registered");
    }

    let newStudent = new students({
      name,
      dob,
      gender,
      blood_type,
      reg_no,
      class_name,
      guardian_name,
      mobile,
      email,
      password,
      image,
      address
    });

    await newStudent.save();
    res.status(200).json(name);
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
};

//get all students
const getStudents = async (req, res) => {
  try {
    const result = await students.find()
    res.status(200).json(result)

  }
  catch {
    res.status(400).json("network error")
  }
}

const addClass = async (req, res) => {
  const { standard, division, teacher } = req.body
  try {
    const preClass = await classes.findOne({ standard, division })
    if (preClass) {
      return res.status(400).json("Class is already Registered");
    }
    else {
      let newClass = new classes({
        standard,
        division,
        teacher
      })
      await newClass.save();
      res.status(200).json("Class Addeded Successfully");
    }

  }
  catch {
    res.status(400).json("network error")
  }
}

//get all class
const getClasses = async (req, res) => {
  try {
    const result = await classes.find()
    res.status(200).json(result)

  }
  catch {
    res.status(400).json("network error")
  }
}

//edit class
const editClass = async (req, res) => {
  const { teacher,id } = req.body
  
  try {
    const result = await classes.findOne({ _id: id });
    if (result) {
      result.teacher = teacher;

      await result.save();
      return res.status(200).json("edited");
    } else {
      return res.status(400).json("There is no class present in Database");
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json("Network error or database query issue occurred");
  }
};

module.exports = {
  adminLogin,
  teacherAdd,
  getTeachers,
  showTeacher,
  editTeacher,
  studentAdd,
  getStudents,
  teacherLogin,
  addClass,
  editClass,
  getClasses
}