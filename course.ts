import {Student} from './student'

class Course{
    course_id: number
    course_name:string
    students:Student[]

    constructor(courseId:number, courseName:string){
        this.course_id =courseId;
        this.course_name = courseName;
        this.students = [];
    }
}

export {Course}