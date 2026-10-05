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
    const button = document.createElement("button");
    button.type = "button";
    button.className = "task-item";
    button.textContent = taskText;
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", function () {
        const completed = li.classList.toggle("completed");
        button.setAttribute("aria-pressed", String(completed));
    });
    li.appendChild(button);

    document.getElementById("taskList").appendChild(li);
    document.getElementById("emptyState").hidden = true;

    input.value = "";
    input.focus();
}

if (typeof document !== "undefined") {
    document.getElementById("taskForm").addEventListener("submit", function (event) {
        event.preventDefault();
        addTask();
    });
}

if (typeof module !== "undefined") {
    module.exports = { isValidTask };
}
