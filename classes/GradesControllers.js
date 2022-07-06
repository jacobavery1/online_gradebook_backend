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
                [studentId, assignment.class_name, assignment.assignment_name, assignment.semester, assignment.assignment_date, assignment.assignment_grade]
            )
            return query.rows
        } catch (error) {
            return error
        }
    }

    async editAssignment(updateAssignment, assignmentId) {
        try {
            const query = await this.pool.query(
                'UPDATE student_grades SET class_name = $1, assignment_name = $2, semester = $3, assignment_date = $4, assignment_grade = $5 WHERE assignment_id = $6', 
                [updateAssignment.class_name, updateAssignment.assignment_name, updateAssignment.semester, updateAssignment.assignment_date, updateAssignment.assignment_grade, assignmentId]
            )
            return query.rows
        } catch (error) {
            return error 
        }
    }

    async deleteAssignment(assignmentId) {
        try {
            const query = await this.pool.query(
                'DELETE FROM student_grades WHERE assignment_id = $1', 
                [assignmentId]
            )
            return query.rows
        } catch (error) {
            return error 
        }
    }
}

module.exports = GradesControllers