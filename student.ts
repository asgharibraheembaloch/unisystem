import { Course } from "./course.js";
import {Person} from "./person.js";

class Student extends Person{
    courses:Course[];
    constructor(name:string, id:number){
        super(name, id);
        this.courses = []
    }
}

export {Student}