const addBtn = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

addBtn.addEventListener("click", function () {

    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    const date = new Date().toLocaleString();
    taskSpan.textContent = taskText + " (Added: " + date + ")";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    li.appendChild(taskSpan);
    li.appendChild(completeBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    pendingList.appendChild(li);

    taskInput.value = "";

    // Complete Task
    completeBtn.addEventListener("click", function () {
        completedList.appendChild(li);
        completeBtn.remove();
        taskSpan.textContent += " (Completed)";
    });

    // Delete Task
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Edit Task
    editBtn.addEventListener("click", function () {
        let newTask = prompt("Edit your task:", taskText);
        if (newTask !== null && newTask.trim() !== "") {
            taskSpan.textContent = newTask + " (Edited)";
        }
    });

});
