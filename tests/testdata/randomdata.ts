import { faker } from "@faker-js/faker";
import { Employeedetails } from "./dataInterface";

export function getrandomemploueedetails(): Employeedetails {
    return {
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        employeeid: faker.number.int(1000).toString()
    };
} 