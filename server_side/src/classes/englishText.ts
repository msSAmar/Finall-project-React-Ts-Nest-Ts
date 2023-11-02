import {User} from "./user";
import { IsEmail ,IsNotEmpty,IsInt, IsString,IsPhoneNumber,IsStrongPassword,Length} from "class-validator";
export class EnglishText {
    constructor(user: User,
        text:string
        ) {
       this.user = user;
       this.text=text;    
    }
    _id?:string;
    user?: User;
   
   @IsNotEmpty()
    text?: string;
    
}