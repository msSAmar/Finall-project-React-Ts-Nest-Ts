import {User} from "./user";

export class Teacher extends User {
    
    constructor(
        firstName: string,
        lastName: string,
        phone: string,
        email: string,
        password: string,
        seniority:number,
       
        ) {
            super(firstName,lastName,phone,email,password); 
            
    } 
}