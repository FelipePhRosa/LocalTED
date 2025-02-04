import { UserManager } from "./models/UserManager";
import * as readline from "readline";


const userManager = new UserManager()
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(query, (answer) => resolve(answer));
    });
}

async function createUser(): Promise<void> {
    userManager.loadUsers()
    console.log(userManager.getAllUsers())
    console.log("\n === Create User (Required) === \n")

    const first_name = await askQuestion("First Name: ")
    const last_name = await askQuestion("Last Name: ")
    const username = await askQuestion("Username: ")
    const email = await askQuestion("Email: ")
    const phone = await askQuestion("Phone: ")
    const password = await askQuestion("Password: ")
    const age = parseInt(await askQuestion("Age: "))
    
    userManager.addUser(first_name, last_name, username, email, phone, password, age)

    console.log("\n === User Created === \n")
    userManager.loadUsers()
    console.log(userManager.getAllUsers())
    rl.close();
}

createUser()