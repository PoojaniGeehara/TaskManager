const readline = require("readline");
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function menu() {
console.log( "Welcome to Task Manager!");
console.log( "1. List tasks");
console.log( "2. Add new task");
console.log( "3. Mark task as complete");
console.log( "4. Delete task");
console.log( "5. Exit");

 r.question("Select an option: ", handleMenu);
}

function handleMenu(choice) {
  switch (choice) {
    case "1": 
       listTasks(); 
       break;
    case "2": 
       addTask(); 
       break;
    case "3": 
       completeTask(); 
       break;
    case "4": 
       deleteTask(); 
       break;
    case "5": 
        console.log("Exiting program. Goodbye!"); 
        rl.close(); 
        break;
    default: 
        console.log("Invalid choice!"); 
        showMenu();
  }
}

