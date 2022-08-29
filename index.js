require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const studentRouter = require('./routes/studentrouter')
const db = mongoose.connection
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use('/studentRouter', studentRouter)
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })


app.use((_, resp) => {
  resp.send("Welcome to My API!")
})

db.on('error', (error) => { console.error(error) })
db.once('open', () => { console.log("connected to db") })

app.listen(PORT, () => {
  console.log(`Server Started in ${PORT} `)
})