import { IsEmail ,IsNotEmpty,IsInt, IsString,IsPhoneNumber,IsStrongPassword,Length} from "class-validator";
export class User {
    constructor(firstName,lastName,phone,email,password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }
   _id?: string;

   @IsString()
   @IsNotEmpty()
   @Length(2, 20)
   readonly firstName?: string;

   @Length(2, 20)
   @IsString()
   @IsNotEmpty()
   readonly lastName?: string;

   @IsPhoneNumber('IL')
   @IsString()
   @IsNotEmpty()
   readonly phone?: string;

   @IsString()
   @IsEmail() 
   @IsNotEmpty()
   readonly email?: string;

   @IsStrongPassword()
   @IsString()
   @IsNotEmpty()
    password?: string;

    //@Length(1, 3)
    level?: number;
    

    
   

}
