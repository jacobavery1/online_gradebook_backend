const router = require('express').Router()
//const pool = require('./db')
const Controllers = require('./classes/Controllers')

const controllers = new Controllers()

router.get('/all_students', async (req, res) => {
    const allStudents = await controllers.getAllStudents()
    res.json(allStudents)
})

router.post('/add_new_student', async (req, res) => {
    const student = req.body
    const addedStudent = await controllers.addStudent(student)
    res.json(addedStudent)
})


module.exports = router 