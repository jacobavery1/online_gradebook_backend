const router = require('express').Router()
const pool = require('../db')
const StudentControllers = require('../classes/StudentControllers')

const controllers = new StudentControllers(pool)

router.get('/', async (req, res) => {
    const allStudents = await controllers.getAllStudents()
    res.json(allStudents)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const student = await controllers.getStudentById(id)
    res.json(student)
})

router.post('/addStudent', async (req, res) => {
    const student = req.body
    const addedStudent = await controllers.addStudent(student)
    res.json(addedStudent)
})


module.exports = router 