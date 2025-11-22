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
        
  }
}
menu();

function listTasks() {
  console.log("\nYour Tasks:");

  if (tasks.length === 0) {
    console.log("No tasks found!");
  } else {
    tasks.forEach((task, index) => {
      const status = task.completed ? "[x]" : "[ ]";
      console.log(`${index + 1}. ${status} ${task.name}`);
    });
  }
 menu();
 
}


function addTask() {
  rl.question("\nEnter new task name: ", (taskName) => {
    if (taskName.trim() === "") {
      console.log("Task name cannot be empty!");
      return addTask();
    }

    tasks.push({ name: taskName.trim(), completed: false });
    console.log("Task added!");

    menu();
  });
}

