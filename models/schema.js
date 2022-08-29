const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema(
  //   {
  //   name: String,
  //   age: Number
  // }
  {
    studentName: String,
    studentRegistrationNumber: String,
    dateOfBirth: String,
    phoneNumber: String,
    email: String,
    gender: String,
    mediumOfStudy: String,
    fatherName: String,
    motherName: String,
    homePhoneNumber: String,
    skills: Array,
    checkList: Array,
    change: Boolean,
    scholarship: String,
    travelMode: String,
    // address: {
    //   doorNumber: '',
    //   streetName: '',
    //   city: '',
    //   states: '',
    //   countryList: '',
    //   pinCode: ''
    // }
  }
)

module.exports = mongoose.model('StudentList', studentSchema)