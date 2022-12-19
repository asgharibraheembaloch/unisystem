import inquirer from "inquirer";
import { Course } from "./course.js";
import { Student } from "./student.js";
import { Teacher } from "./teacher.js";
import { University } from "./university.js";
async function main() {
    let que = await inquirer
        .prompt([
            {
                type: "list",
                name: "usr_input",
                message: "Enter your data",
                choices: ["Add Student", "Add Course", "Add Teacher"]
            }
        ]);
    const university = new University();

    switch (que.usr_input) {
        case "Add Student":
            let student_nic = await inquirer
                .prompt([
                    {
                        type: "number",
                        name: "nic",
                        message: "Enter student id",
                    }
                ]);
            let student_name = await inquirer
                .prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "Enter student name",
                    }
                ]);
            university.addStudent(new Student(student_name.name, student_nic.nic))
            console.log(university.students)
            break;

        case "Add Course":
            let course_id = await inquirer
                .prompt([
                    {
                        type: "number",
                        name: "id",
                        message: "Enter course id",
                    }
                ]);
            let course_name = await inquirer
                .prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "Enter course name",
                    }
                ]);
            university.addCourse(new Course(course_name.name, course_id.id))
            console.log(university.courses)
            break;
        case "Add Teacher":
            let teacher_nic = await inquirer
                .prompt([
                    {
                        type: "number",
                        name: "nic",
                        message: "Enter teacher nic",
                    }
                ]);
            let teacher_name = await inquirer
                .prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "Enter teacher name",
                    }
                ]);
            university.addTeacher(new Teacher(teacher_name.name, teacher_nic.nic))
            console.log(university.teachers)
            break;

        default:
            break;
    }



}

main()