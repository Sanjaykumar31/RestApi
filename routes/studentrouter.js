const express = require('express')
const router = express.Router()
const studentData = require('../models/schema')
const validator = require('../validator')
const middleware = require('../middleware')
const checkId = require('../objectid')
// const duplicatecheck = require('../duplicatecheck')


router.get('/', async (req, res) => {
  // res.send('hello')
  try {
    const studentData1 = await studentData.find()
    res.json(studentData1)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/:id', checkId, async (req, res) => {
  try {
    const studentData1 = await studentData.findById(req.params.id)
    res.json(studentData1)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/', middleware(validator), async (req, res) => {
  const student = new studentData(req.body)
  // const student = new studentData({
  //   studentName: req.body.studentName,
  //   studentRegistrationNumber: req.body.studentRegistrationNumber,
  //   dateOfBirth: req.body.dateOfBirth,
  //   phoneNumber: req.body.phoneNumber,
  //   email: req.body.email,
  //   gender: req.body.gender,
  //   mediumOfStudy: req.body.mediumOfStudy,
  //   fatherName: req.body.fatherName,
  //   motherName: req.body.motherName,
  //   homePhoneNumber: req.body.homePhoneNumber,
  //   skills: req.body.skills,
  //   checkList: req.body.checkList,
  //   change: req.body.change,
  //   scholarship: req.body.scholarship,
  //   travelMode: req.body.travelMode,
  //   address: req.body.address
  // })
  try {
    const studentData1 = await student.save()
    res.status(200).json(studentData1)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.patch('/:id', checkId, getstudent, async (req, res) => {
  try {
    // const studentData1 = await res.studentData.save(req.body, { new: true })
    const studentData1 = await studentData.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(studentData1)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


router.delete('/:id', checkId, getstudent, async (req, res) => {
  try {
    await res.studentData.remove()
    //  await studentData.findByIdAndDelete(req.params.id)
    res.json("Product deleted!")
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getstudent(req, res, next) {
  let student
  try {
    student = await studentData.findById(req.params.id)
    if (student == null) {
      return res.status(201).json("Cannot Find Student")
    }
  }
  catch (err) {
    res.status(500).json({ message: err.messaage })
  }
  res.studentData = student
  next()
}

module.exports = router