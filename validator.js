const joi = require('joi')
module.exports = joi.object({
  studentName: joi.string(),
  studentRegistrationNumber: joi.string(),
  dateOfBirth: joi.string(),
  phoneNumber: joi.string(),
  email: joi.string(),
  gender: joi.string(),
  mediumOfStudy: joi.string(),
  fatherName: joi.string(),
  motherName: joi.string(),
  homePhoneNumber: joi.string(),
  skills: joi.array(),
  checkList: joi.array(),
  change: joi.boolean(),
  scholarship: joi.string(),
  travelMode: joi.string(),
  address: {
    doorNumber: joi.string(),
    streetName: joi.string(),
    city: joi.string(),
    states: joi.string(),
    countryList: joi.string(),
    pinCode: joi.string()
  }
})

