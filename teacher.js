import { Person } from "./person.js";
class Teacher extends Person {
    constructor(name, id) {
        super(name, id);
        this.courses = [];
    }
}
export { Teacher };
