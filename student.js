import { Person } from "./person.js";
class Student extends Person {
    constructor(name, id) {
        super(name, id);
        this.courses = [];
    }
}
export { Student };
