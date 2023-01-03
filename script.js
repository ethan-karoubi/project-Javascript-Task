import TaskManagers from "./classes/taskManagers.js";
import task from "./classes/Task.js"

let manager = new TaskManagers();


showTaskNotCompletedInTable()

function showTaskNotCompletedInTable() {
    document.getElementById("newTaskAdd").innerHTML = "";
    for (let task of manager.tasks) {

        if (task.get('completed') == false) {
            document.getElementById("newTaskAdd").innerHTML += `<tr class=${task.get("description")}><td>
            ${task.get("description")} </td> <td onclick=moveToCompleted(${task.get('id')})><i class="fa-sharp fa-solid fa-check"></i>
            <td onclick="updateTaskInPrompt(${task.get("id")})"> <i class="fa-solid fa-pen-to-square"></i> </td> <td onclick="deleteTaskInConfirm(${task.get("id")})"> <i class="fa-regular fa-trash-can"></i> </td> </tr>`;
        }

    }
}

function showTaskCompletedInTable() {
    document.getElementById("taskCompleted").innerHTML = "";
    for (let task of manager.tasks) {

        if (task.get('completed') == true) {
            document.getElementById("taskCompleted").innerHTML += `<tr class=${task.get("description")}>
            <td>${task.get("description")}</td>
            <td onclick="deleteTaskInConfirm(${task.get("id")})"> <i class="fa-regular fa-trash-can"></i> </td> 
            </tr>`;
        }

    }
}

window.addNewTask = function addNewTask() {
    let description = document.getElementById("floatingDescription").value;
    manager.addTask(description);
    console.log(manager)
    showTaskNotCompletedInTable();
};

window.moveToCompleted = function moveToCompleted(id) {
    if (confirm("did u complete this task?")) {
        manager.moveToCompleted(id)
        showTaskNotCompletedInTable()
        showTaskCompletedInTable()
        alert("u finished this task!")
    }
    else {
        alert('u not finished ur task')
    }
};

window.deleteTaskInConfirm = function deleteTaskInConfirm(id) {
    if (confirm("Are you sure?")) {
        manager.deleteTask(id);
        showTaskNotCompletedInTable();
        showTaskCompletedInTable();

        alert("Task has been removed");
    }
};

window.updateTaskInPrompt = function updateTaskInPrompt(id) {
    let newDescription = prompt("Enter new description:");
    if (newDescription == "" || newDescription == null) alert("Someting went wrong");
    else {
        manager.updateTask(id, newDescription);
        showTaskNotCompletedInTable();
    }
};