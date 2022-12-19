class University {
    constructor() {
        this.students = [];
        this.courses = [];
        this.teachers = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    addCourse(course) {
        this.courses.push(course);
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
}
export { University };
