const router = require('express').Router()
const pool = require('../db')
const GradesControllers = require('../classes/GradesControllers')

const controllers = new GradesControllers(pool)

router.get('/allAssignments/:studentId', async (req, res) => {
    const { studentId } = req.params 
    const studentAssignments = await controllers.getAllStudentAssignments(studentId)
    res.json(studentAssignments)
})

router.post('/addAssignment', async (req, res) => {
    const { studentId, assignment } = req.body
    const addedAssignment = await controllers.addStudentAssignment(assignment, studentId)
    res.json(addedAssignment)
})

module.exports = router