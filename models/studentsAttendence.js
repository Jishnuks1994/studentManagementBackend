const mongoose=require('mongoose')

const studentsAttendanceSchema = new mongoose.Schema({
    date: {
      type: String,
      required: true
    },
    students: [{
      student_id: {
        type: String,
        required: true
      },
      present: {
        type: Boolean,
        required: true
      }
    }]
  });

  const studentsAttendances = mongoose.model('studentsAttendances', studentsAttendanceSchema);

module.exports = studentsAttendances;