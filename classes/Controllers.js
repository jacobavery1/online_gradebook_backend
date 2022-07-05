const pool = require('../db')

class Controllers {
    constructor() {
        this.pool = pool
    }

    async getAllStudents() {
        try {
            const selection = await this.pool.query('SELECT * FROM student')
            return selection.rows
        } catch (error) {
            return error
        }     
    }

    async addStudent({last_name, first_name, grade_level, student_email}) {
        try {
            const selection = await this.pool.query(
                'INSERT INTO student (last_name, first_name, grade_level, student_email) VALUES ($1, $2, $3, $4) RETURNING student_id', 
                [last_name, first_name, grade_level, student_email]
            )
            return selection
        } catch (error) {
            return error
        }
    }
}

module.exports = Controllers