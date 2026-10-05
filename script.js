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

function setTheme(theme) {
    const isDark = theme === "dark";
    document.documentElement.dataset.theme = isDark ? "dark" : "light";

    const toggle = document.getElementById("themeToggle");
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
    toggle.querySelector(".theme-toggle-icon").textContent = isDark ? "☀" : "☾";
    toggle.querySelector(".theme-toggle-label").textContent = isDark ? "Light mode" : "Dark mode";
    document.querySelector('meta[name="theme-color"]').setAttribute("content", isDark ? "#111827" : "#f5f7fb");
}

if (typeof document !== "undefined") {
    const themeToggle = document.getElementById("themeToggle");
    let savedTheme = "light";
    try {
        savedTheme = localStorage.getItem("student-task-manager-theme") || "light";
    } catch (error) {
        // The toggle still works when browser storage is unavailable.
    }
    setTheme(savedTheme);
    themeToggle.addEventListener("click", function () {
        const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        try {
            localStorage.setItem("student-task-manager-theme", nextTheme);
        } catch (error) {
            // Keep the selected theme for this page even when it cannot be saved.
        }
    });

    document.getElementById("taskForm").addEventListener("submit", function (event) {
        event.preventDefault();
        addTask();
    });
}

if (typeof module !== "undefined") {
    module.exports = { isValidTask };
}
