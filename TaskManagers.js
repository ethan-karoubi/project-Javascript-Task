
import task from "./Task.js"

export default class TaskManagers {
    constructor() {
        this.tasks = [];
    }


    addTask(taskDescription) {
        console.log('add task was called with', taskDescription)
        const newTask = new task(taskDescription);
        this.tasks.push(newTask)
    }


    deleteTask(idToDelete) {
        console.log('DeleteTask', idToDelete);
        this.tasks = this.tasks.filter((task) => task.id !== idToDelete);
    }

    updateTask(idToUpdate, newDescription) {
        console.log('updateTask ' + ' ' + idToUpdate + ' ' + newDescription);
        let taskToUpdateIndex = this.tasks.findIndex((task) => task.id === idToUpdate);

        if (taskToUpdateIndex > -1) {
            this.tasks[taskToUpdateIndex].description = newDescription;
        }
    }

    moveToCompleted(idToUpdate) {
        let taskToUpdateIndex = this.tasks.findIndex((task) => task.id === idToUpdate);
        if (taskToUpdateIndex > -1) {
            this.tasks[taskToUpdateIndex].completed = true;
        }
    }
}



