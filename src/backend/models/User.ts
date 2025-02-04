export class User{
    private id: number;
    private username: string;
    private first_name: string;
    private last_name: string;
    private name: string;
    private email: string;
    private phone: string;
    private password: string;
    private age: number;
    constructor(id: number, first_name:string, last_name:string, username: string, email: string, phone: string, password: string, age: number){
        this.id = id;
        this.username = username;
        this.first_name = first_name;
        this.last_name  = last_name;
        this.name = `${first_name} ${last_name}`;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.age = age;
    }

    public getId(): number{
        return this.id
    }
    
    public getName(): string{
        return this.name
    }

    public getUsername(): string{
        return this.username
    }

    public getAge(): number{
        return this.age
    }

    public getPhone(): string{
        return this.phone
    }

    public getEmail(): string{
        return this.email
    }
    
    public getFirstName(): string{
        return this.first_name
    }

    public getLastName(): string{
        return this.last_name
    }
}