# 🖥️ Task Manager Application

## 📌 Description

This is a simple **console-based Task Manager** built using Node.js.  
It allows users to manage a list of tasks directly from the terminal.

Users can:

- Add new tasks  
- View all tasks  
- Mark tasks as completed  
- Delete tasks  
- Exit the program safely 
---
### ✨ Features / Functionalities

#### ✔️ Add Task  
Allows the user to enter a task name and save it.

#### ✔️ List Tasks  
Shows all tasks with indicators:  
- `[ ]` = Pending  
- `[x]` = Completed
  
#### ✔️ Mark as Complete
Mark a specific task as completed.

#### ✔️ Delete Task 
Remove a task from the list.

#### ✔️ Exit 
Close the application.

### ✨ Additional Features

- Input validation (prevents empty task names).
- Menu automatically reappears after each action.
---
### 🛠️ How to Run the Application

#### **1️⃣ Requirements**
- Node.js **version: v24.11.1.**

#### **2️⃣ Installing Dependencies**
- No external dependencies are required.  
- This project uses **only built-in Node.js modules**.
- Verify Node.js installation:

```
node -v
```
#### **3️⃣ Steps to Run**
Follow these **three simple bash commands** to run your Task Manager:

##### **Step 1: Clone or Download the Repository**
```
git clone <https://github.com/PoojaniGeehara/TaskManager.git>
```

##### **Step 2: Open the folder**
```
cd taskManager
```

##### **Step 3: Run the application**
```
node taskManager.js
```
#### **4️⃣ Usage Notes**
- This is a console-based application (no graphical interface).
- Tasks are stored only in memory, meaning:
    - When you close the program, all tasks will be cleared.
- No external libraries are used - everything runs using pure Node.js.
- Make sure you run the program using Node.js v24 or above for best compatibility.
