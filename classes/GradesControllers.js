class GradesControllers {
    constructor(pool) {
        this.pool = pool
    }

    async getAllStudentAssignments(studentId) {
        try {
            const query = await this.pool.query(
                'SELECT * FROM student_grades WHERE student_id = $1', 
                [studentId]
            )
            return query.rows
        } catch (error) {
            return error
        }
    }

    async addStudentAssignment(assignment, studentId) {
        try {
            const query = await this.pool.query(
                'INSERT INTO student_grades (student_id, class_name, assignment_name, semester, assignment_date, assignment_grade) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', 
                [studentId, assignment.className, assignment.assignmentName, assignment.semester, assignment.assignmentDate, assignment.assignmentGrade]
            )
            return query.rows
        } catch (error) {
            return error
        }
    }
}

module.exports = GradesControllers