const router = require('express').Router()
//const pool = require('./db')
const Controllers = require('./classes/Controllers')

const controllers = new Controllers()

router.get('/all_students', (req, res) => {
    controllers.getAllStudents()
        .then(result => {
            res.json(result)
        }).catch(err => {
            throw err
        })
})

router.post('/add_new_student', (req, res) => {
    const student = req.body
    controllers.addStudent(student)
        .then(result => {
            res.json(result)
        }).catch(err => {
            throw err
        })
})

module.exports = router 