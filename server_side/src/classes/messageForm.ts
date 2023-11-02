import {User} from "./user";
import { IsEmail ,IsNotEmpty,IsInt, IsString,IsPhoneNumber,IsStrongPassword,Length} from "class-validator";
export class MessageForm {
    constructor(user: User,
        text:string,like:number
        ) {
       this.user = user;
       this.like=like;
       this.text=text;
       this.time = new Date().getHours();    
    }
    _id?:string;
    user?: User;
   
   @IsNotEmpty()
    text?: string;
    like?: number;
    time?:number;
}