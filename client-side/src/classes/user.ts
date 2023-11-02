export class User {
    constructor(firstName: string | undefined, lastName: string | undefined, phone: string | undefined, email: string | undefined, password: string | undefined) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.level=0;
    }
    _id?: string;

    readonly firstName?: string;

    readonly lastName?: string;

    readonly phone?: string;

    readonly email?: string;

    password?: string;
    
    level?: number;
}
