import {User} from "./user";
export class MessageForm {
    constructor(user: User,
        like: number,
        text:string
        ) {
       this.user = user;
       this.like=like;
       this.text=text;
       this.time = new Date().getHours();    
    }
    user?: User;
    like?: number;
    text?: string;
    time?:number;
}