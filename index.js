/* 
 Online gradebook web application (back-end)
 
*/

const express = require('express')
const dotenv = require('dotenv')
const students_router = require('./routes/students_router')
const grades_router = require('./routes/grades_router')

const app = express()
const PORT = process.env.PORT || 4000

dotenv.config()
app.use(express.json())

app.use('/students', students_router)
app.use('/grades', grades_router)


app.listen(PORT, () => console.log(`APP LISTENING ON PORT ${PORT}`))