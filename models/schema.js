const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema(
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
    address: addressSchema,
  }
)
const addressSchema = new mongoose.Schema({
  doorNumber: String,
  streetName: String,
  city: String,
  states: String,
  countryList: String,
  pinCode: String
}, {
  _id: false
})

module.exports = mongoose.model('StudentList', studentSchema)