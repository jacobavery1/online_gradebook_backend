const pool = require('../db')

class Controllers {
    constructor() {
        this.pool = pool
    }

    getAllStudents() {
        return new Promise((resolve, reject) => {
            return this.pool.query('SELECT * FROM student')
                .then(result => {
                    return resolve(result.rows)
                }).catch(err => {
                    return reject(err)
                })
        })
    }

    addStudent({last_name, first_name, grade_level, student_email}) {
        return new Promise((resolve, reject) => {
            return this.pool.query(
                'INSERT INTO student (last_name, first_name, grade_level, student_email) VALUES ($1, $2, $3, $4) RETURNING student_id', 
                [last_name, first_name, grade_level, student_email]
            ).then(result => {
                return resolve(result)
            }).catch(err => {
                return reject(err)
            })
        })
    }
}

module.exports = Controllers