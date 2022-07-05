CREATE TABLE student (
    student_id uuid DEFAULT uuid_generate_v1(), 
    last_name VARCHAR(50) NOT NULL, 
    first_name VARCHAR(50) NOT NULL, 
    grade_level INT NOT NULL, 
    student_email VARCHAR(50)
    PRIMARY KEY (student_id)
);

CREATE TABLE student_grades (
    student_id uuid REFERENCES student(student_id), 
    class_name VARCHAR(50), 
    assignment_name VARCHAR(50), 
    semester INT, 
    assignment_date DATE, 
    assignment_grade DECIMAL
)