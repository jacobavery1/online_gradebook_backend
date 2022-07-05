class StudentControllers {
    constructor(pool) {
        this.pool = pool
    }

    async getAllStudents() {
        try {
            const query = await this.pool.query('SELECT * FROM student')
            return query.rows
        } catch (error) {
            return error
        }     
    }

    async getStudentById(id) {
        try {
            const query = await this.pool.query(
                'SELECT * FROM student WHERE student_id = $1', 
                [id]
            )
            return query.rows
        } catch (error) {
            return error
        }
    }

    async addStudent({last_name, first_name, grade_level, student_email}) {
        try {
            const query = await this.pool.query(
                'INSERT INTO student (last_name, first_name, grade_level, student_email) VALUES ($1, $2, $3, $4) RETURNING student_id', 
                [last_name, first_name, grade_level, student_email]
            )
            return query.rows
        } catch (error) {
            return error
        }
    }
}

module.exports = StudentControllers