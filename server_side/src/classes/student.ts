import {User} from "./user";
export class Student extends User {
    stars: number;
    tasks: number[];
    constructor(
        firstName: string,
        lastName: string,
        phone: string,
        email: string,
        password: string
        ) {
            super(firstName,lastName,phone,email,password);  
    } 
}