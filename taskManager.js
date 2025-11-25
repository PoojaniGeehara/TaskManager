const readline = require("readline");
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tasks = [];

console.log("Welcome to Task Manager!");
// Display main menu
function menu() {
console.log( "1. List tasks");
console.log( "2. Add new task");
console.log( "3. Mark task as complete");
console.log( "4. Delete task");
console.log( "5. Exit"
);
 r.question("Select an option: ", handleMenu);
}

// Menu handler
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
        r.close(); 
        break;
    default: 
        console.log("Invalid choice!");                       
  }
}
menu();

// List all tasks
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

// Add a new task
function addTask() {
  r.question("\nEnter new task name: ", (taskName) => {
    if (taskName === "") {
      console.log("Task name cannot be empty!");
      return addTask();
    }

    tasks.push({ name: taskName, completed: false });
    console.log("✅ Task added!");

    menu();
  });
}

// Mark a task as complete
function completeTask() {
  if (tasks.length === 0) {
    console.log(" No tasks to complete!");
    return menu();
  }

  r.question("\nEnter task number to complete: ", (num) => {
    let index = num - 1;

    if (!tasks[index]) {
      console.log("Invalid task number!");
      return completeTask(); 
    }

    tasks[index].completed = true;
    console.log("✅ Task completed!");
    menu();
  });
}

// Delete a task
function deleteTask() {
  if (tasks.length === 0) {
    console.log("No tasks to delete!");
    return menu();
  }

  r.question("Enter task number to delete: ", function (number) {
    let index = Number(number) - 1;

    if (index < 0 || index >= tasks.length) {
      console.log("Invalid task number!");
      return deleteTask();
    }

    tasks.splice(index, 1); 
    console.log("Task deleted!");
    menu();
  });
}

