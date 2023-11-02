import {User} from "./user";
// import { Availability } from '../enums/availability.enum';
export class Teacher extends User {
    seniority:number;
 //   availability:Availability;
    constructor(
        firstName: string,
        lastName: string,
        phone: string,
        email: string,
        password: string,
        seniority:number,
     //   availability:Availability
        ) {
            super(firstName,lastName,phone,email,password); 
            this.seniority = seniority;
    //        this.availability=availability;
    } 
}