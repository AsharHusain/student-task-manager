function isValidTask(task) {
    return task.trim().length > 0;
}

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (!isValidTask(taskText)) {
        return;
    }

    const li = document.createElement("li");

    li.textContent = taskText;

    li.onclick = function () {
        li.classList.toggle("completed");
    };

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

if (typeof module !== "undefined") {
    module.exports = { isValidTask };
}