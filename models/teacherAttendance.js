const mongoose=require('mongoose')

const teachersAttendanceSchema = new mongoose.Schema({
    date: {
      type: String,
      required: true
    },
    teachers: [{
      teacher_id: {
        type: String,
        required: true
      },
      present: {
        type: Boolean,
        required: true
      }
    }]
  });

  const teacherAttendances = mongoose.model('teacherAttendances', teachersAttendanceSchema);

module.exports = teacherAttendances;