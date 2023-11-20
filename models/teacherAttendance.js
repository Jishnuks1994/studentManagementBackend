const mongoose = require("mongoose");

const teachersAttendanceSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },  
  attendanceRecords: [
    {
      teacher_id: {
        type: String,
        required: true,
      },
      present: {
        type: String,
        required: true,
      },
    },
  ],
});

const teacherAttendances = mongoose.model(
  "teacherAttendances",
  teachersAttendanceSchema
);

module.exports = teacherAttendances;
