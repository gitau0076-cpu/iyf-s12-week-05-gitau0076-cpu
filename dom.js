// Select elements with the common DOM selector methods.
const header = document.getElementById("main-header");
const firstLink = document.querySelector(".nav-link");
const allLinks = document.querySelectorAll(".nav-link");
console.log("getElementById:", header);
console.log("querySelector:", firstLink);
console.log("querySelectorAll:", allLinks);

// Traverse the DOM: parent, children, and siblings.
const nav = document.querySelector("nav");
const article = document.querySelector("article");
console.log("nav parent:", nav.parentElement);
console.log("nav children:", nav.children);
console.log("article next sibling:", article.nextElementSibling);

// Change text, add trusted HTML, and safely display user-provided text.
const articleTitle = article.querySelector(".title");
articleTitle.textContent = "DOM Practice";
article.insertAdjacentHTML("beforeend", "<p class='content highlight'>This paragraph was added with trusted HTML.</p>");
const unsafe = document.getElementById("unsafe");
const safe = document.getElementById("safe");
const userInput = `<img src="x" onerror="alert('hacked!')">`;

// Read and update attributes and data attributes.
const articleElement = document.querySelector("article[data-id]");
const homeLink = document.querySelector(".nav-link");
console.log("href attribute:", homeLink.getAttribute("href"));
console.log("article data id:", articleElement.dataset.id);
articleElement.dataset.category = "practice";
homeLink.setAttribute("title", "Home link example");

// Add and remove elements dynamically.
const paragraphList = document.getElementById("paragraph-list");
let paragraphNumber = 0;
document.getElementById("add-paragraph").addEventListener("click", () => {
    paragraphNumber += 1;
    const row = document.createElement("p");
    row.textContent = `Dynamic paragraph ${paragraphNumber} `;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => row.remove());

    row.appendChild(removeButton);
    paragraphList.appendChild(row);
});

// Listen to a keyboard event and use the event object's key property.
document.getElementById("name").addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        event.currentTarget.value = "";
    }
});

// Handle form submission and prevent the browser's default page reload.
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    document.getElementById("form-message").textContent =
        name && email ? `Thanks, ${name}. The form was submitted.` : "Please enter your name and email.";

    if (name && email) {
        unsafe.innerHTML = userInput;
        safe.textContent = userInput;
    }
});

// Event delegation: one click listener on the parent UL handles every task,
// including tasks added after the listener was registered.
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = taskInput.value.trim();
    if (!text) return;

    const task = document.createElement("li");
    task.className = "task";
    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = text;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-task";
    deleteButton.textContent = "Delete";

    task.append(taskText, " ", deleteButton);
    taskList.appendChild(task);
    taskForm.reset();
    taskInput.focus();
});

taskList.addEventListener("click", (event) => {
    const task = event.target.closest(".task");
    if (!task) return;

    if (event.target.closest(".delete-task")) {
        task.remove();
    } else {
        task.classList.toggle("completed");
    }
});

// Event bubbling: clicking the child also triggers its parent listeners.
document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent click listener");
});
document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent click listener");
});
document.getElementById("child").addEventListener("click", (event) => {
    console.log("Child click listener; target:", event.target);
});
