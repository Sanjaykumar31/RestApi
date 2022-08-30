const express = require('express')
const router = express.Router()
const studentData = require('../models/schema')
const validator = require('../validator')
const middleware = require('../middleware')
const checkId = require('../objectid')



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
  // res.json({ message: req.body })
  const student = new studentData(req.body)
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