import {Student} from "./student.js";
import { Course } from "./course.js";
import { Teacher } from "./teacher.js";

class University{
    students:Student[];
    courses:Course[];
    teachers: Teacher[]
    constructor(){
        this.students = [];
        this.courses = [];
        this.teachers = [];
    }
    addStudent(student:Student){
        this.students.push(student);

    }
    addCourse(course:Course){
        this.courses.push(course)
    }
    addTeacher(teacher:Teacher){
        this.teachers.push(teacher)
    }
}

export{University};