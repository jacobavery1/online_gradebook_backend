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

router.put('/updateAssignment/:assignmentId', async (req, res) => {
    const { assignmentId } = req.params 
    const updateAssignment = req.body 
    const updatedAssignment = await controllers.editAssignment(updateAssignment, assignmentId)
    res.json(updatedAssignment)
})

router.delete('/:assignmentId', async (req, res) => {
    const { assignmentId } = req.params
    const deletedAssignment = await controllers.deleteAssignment(assignmentId)
    res.json(deletedAssignment)
})

module.exports = router