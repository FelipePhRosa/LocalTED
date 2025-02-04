import { User } from "./User";
import * as fs from "fs";
import * as path from "path";


export class UserManager{
    private users: User[] = []
    private lastId: number = 752
    private filePath: string;

    public constructor(){
        this.filePath = path.resolve(__dirname, "../data/users.json");
        this.loadUsers();
    }

    public loadUsers(): void {
        try {
            if (!fs.existsSync(this.filePath)) {
                // Se o arquivo não existir, cria um arquivo vazio com estrutura inicial
                const initialData = { users: [], lastId: 752 };
                fs.writeFileSync(this.filePath, JSON.stringify(initialData, null, 2), 'utf8');
                console.log("File not found. Creating a new one with DefaultData.");
                return;
            }
    
            const data = fs.readFileSync(this.filePath, 'utf8');
            const jsonData = JSON.parse(data);
            this.users = jsonData.users;
            this.lastId = jsonData.lastId;
            console.log("Users loaded successfully!");
        } catch (error) {
            console.log("Error parsing the user:", error);
        }
    }

    private saveUsers(): void {
        const dataToSave = {
            users: this.users,
            lastId: this.lastId
        };

        fs.writeFileSync(this.filePath, JSON.stringify(dataToSave, null, 2), "utf8");
    }

    public addUser(first_name: string, last_name: string, username: string, email: string, phone: string, password: string, age: number): void{
        this.lastId += 1
        const newUser = new User(this.lastId, first_name, last_name, username, email, phone, password, age);
        this.users.push(newUser)
        this.saveUsers()
        console.log("User added successfully!")
    }

    public getAllUsers(): User[] {
        console.log("/// List of Users ///")
        return this.users
    }

    public getAllUsername(): string[] {
        console.log("/// List of Usernames ///")
        return this.users.map(user => user.getUsername())
    }

    public getUserById(id: number): User | string {
        const user = this.users.find(user => user.getId() === id)
        if (user){
            return user
        }
            return "User not found."
    }
    
    public deleteUser(id: number): void{
        const userIndex = this.users.findIndex(user => user.getId() === id)
        if (userIndex !== -1){
            this.users.splice(userIndex, 1)
            this.saveUsers()
            console.log("User deleted successfully!")
        }
        return console.log("User not found.")
    }

}

    