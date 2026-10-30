const check = (label, ok) => console.log(`${ok ? "✓" : "✗"} ${label}`);

// Task 9.1: Select elements
const header = document.getElementById("main-header");
console.log("getElementById:", header);

const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);

// Practice: Select these elements
const h1Element = document.querySelector("h1");
console.log("h1:", h1Element);
const allContent = document.getElementsByClassName("content");
console.log("all content:", allContent);
const contactForm = document.getElementById("contact-form");
console.log("contact form:", contactForm);
const emailInput = document.querySelector('input[type="email"]');
console.log("email input:", emailInput);
const firstNavLink = document.querySelector(".nav-link");
console.log("first nav link:", firstNavLink);
const navItems = document.querySelectorAll("nav li");
console.log("nav items:", navItems);
const allParagraphs = document.querySelectorAll("p");
const lastParagraph = allParagraphs[allParagraphs.length - 1];
console.log(lastParagraph);

// Task 9.2: Traverse the DOM

const nav = document.querySelector("nav");

// Parent
console.log(nav.parentElement);          // header

// Children
console.log(nav.children);               // HTMLCollection
console.log(nav.firstElementChild);      // ul
console.log(nav.lastElementChild);       // ul

// Siblings
const article = document.querySelector("article");
console.log(article.nextElementSibling);     // section
console.log(article.previousElementSibling); // null

// Descendants
const navLinks = nav.querySelectorAll("a");  // all links inside nav

const headerElement = document.querySelector("header");
const navInsideHeader = headerElement.querySelector("nav");

const parentListItem = firstNavLink.parentElement;

const nextSection = article.nextElementSibling;

const list = document.querySelector("ul");
const childListItems = list.children;


const bodyFromFooter = document.querySelector("footer").closest("body");

const headerFromLink = firstNavLink.closest("header");

console.log(navInsideHeader);
console.log(parentListItem);
console.log(nextSection);
console.log(childListItems);
console.log(bodyFromFooter);
console.log(headerFromLink)

// Task 9.3: Modifying Content

// Exercise 1: Text Content
const h1 = document.querySelector("h1");

// Reading text
console.log(h1.textContent);     // Includes hidden text
console.log(h1.innerText);       // Only visible text

// Modifying text
h1.textContent = "New Title";

// Exercise 2: Html Content
// Reading HTML
console.log(article.innerHTML);

// Modifying HTML (careful with security!)
article.innerHTML = `
    <h2>Updated Article</h2>
    <p>This is new content.</p>
`;

// Why innerHTML is dangerous with anything a user typed:
const userInput = `<img src="x" onerror="alert('hacked!')">`;
article.innerHTML = userInput;    // the image fails to load, onerror RUNS the code
article.textContent = userInput;  // shows the characters as text — nothing runs

// Rule: textContent for anything that came from a user or an API.
// innerHTML only for HTML you wrote yourself.

// Exercise 3:Attributes
const link = document.querySelector(".nav-link");

// Get attribute
console.log(link.getAttribute("href"));
console.log(link.href);  // Property access

// Set attribute
link.setAttribute("href", "https://developer.mozilla.org");
link.href = "https://developer.mozilla.org";  // Same result

// Check attribute
console.log(link.hasAttribute("target"));

// Remove attribute
link.removeAttribute("target");

// Data attributes
// <element data-id="123" data-category="tech">
const element = document.querySelector("[data-id]");
console.log(element.dataset.id);        // "123"
console.log(element.dataset.category);  // "tech"
element.dataset.newAttr = "value";      // Creates data-new-attr

// Exercise 4: Styles
const container = document.querySelector(".container");

// Inline styles
container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";

// Multiple styles (use classes instead when possible!)
Object.assign(container.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px"
});

// Task 9.4: Adding and Removing elements

// Exercise 1: Creating Elements

// Create new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

// Add to the page
article.appendChild(newParagraph);  // Add at end

// Insert before another element
const firstParagraph = article.querySelector("p");
article.insertBefore(newParagraph, firstParagraph);  // Add before first p

// Modern insertion methods
article.prepend(newParagraph);         // First child
article.append(newParagraph);          // Last child
firstParagraph.before(newParagraph);   // Before sibling
firstParagraph.after(newParagraph);    // After sibling

// Exercise 2: Removing Elements

// Remove an element
const footer = document.querySelector("footer");
footer.remove();

// Remove child
 nav = document.querySelector("nav");
const lastLink = nav.querySelector("li:last-child");
lastLink.parentElement.removeChild(lastLink);

// Clear all children
article.innerHTML = "";  // Simple but rebuilds DOM
// OR
while (article.firstChild) {
    article.removeChild(article.firstChild);
}
// Exercise 3: Cloning Elements
const navItem = document.querySelector(".nav-link").parentElement;
const clone = navItem.cloneNode(true);  // true = deep clone
clone.querySelector("a").textContent = "New Link";
document.querySelector(".nav-list").appendChild(clone);

function addNavItem(text, href) {
    // Create li with a.nav-link inside
    // Add to the nav list
}

addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");

// ============================================ 
   // Lesson 10 Tasks
// ============================================ 
// Task 10.1: Event listeners

const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

// Adding event listeners
button.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Arrow function
button.addEventListener("click", () => {
    console.log("Clicked again!");
});

// Named function (can be removed later)
function handleClick() {
    console.log("Handled!");
}
button.addEventListener("click", handleClick);

// Remove event listener
button.removeEventListener("click", handleClick);

// Exercise 2: Event Types
// Mouse events
element.addEventListener("click", handler);
element.addEventListener("dblclick", handler);
element.addEventListener("mouseenter", handler);
element.addEventListener("mouseleave", handler);
element.addEventListener("mousemove", handler);

// Keyboard events
input.addEventListener("keydown", handler);
input.addEventListener("keyup", handler);
input.addEventListener("keypress", handler);  // Deprecated

// Form events
form.addEventListener("submit", handler);
input.addEventListener("focus", handler);
input.addEventListener("blur", handler);
input.addEventListener("input", handler);     // Real-time changes
input.addEventListener("change", handler);    // On blur after change

// Window events
window.addEventListener("load", handler);
window.addEventListener("resize", handler);
window.addEventListener("scroll", handler);

// Build : Click Counter 
const countDisplay = document.getElementById("count");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");

let count = 0;

function renderCount() {
    countDisplay.textContent = String(count);
    decreaseButton.disabled = count === 0;
}

increaseButton.addEventListener("click", () => {
    count += 1;
    renderCount();
});

decreaseButton.addEventListener("click", () => {
    count = Math.max(0, count - 1);
    renderCount();
});

resetButton.addEventListener("click", () => {
    count = 0;
    renderCount();
});

renderCount();

// Task 10.2:The Event Object

document.addEventListener("click", function(event) {
    // The element that was clicked
    console.log("Target:", event.target);
    
    // The element the listener is attached to
    console.log("Current Target:", event.currentTarget);
    
    // Event type
    console.log("Type:", event.type);
    
    // Mouse position
    console.log("Position:", event.clientX, event.clientY);
    
    // Prevent default behavior
    event.preventDefault();
    
    // Stop propagation (bubbling)
    event.stopPropagation();
});

// Keyboard events
document.addEventListener("keydown", function(event) {
    console.log("Key:", event.key);       // "a", "Enter", "Escape"
    console.log("Code:", event.code);     // "KeyA", "Enter", "Escape"
    console.log("Shift:", event.shiftKey);
    console.log("Ctrl:", event.ctrlKey);
    console.log("Alt:", event.altKey);
});
// Build:Keyboard Shortcuts

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key.toLowerCase() === "s") {
        event.preventDefault();
        alert("Saved!");
        return;
    }

    if (event.ctrlKey && event.key === "Enter") {
        event.preventDefault();
        form.requestSubmit();
        return;
    }

    if (event.key === "Escape") {
        form.querySelectorAll("input, textarea, select").forEach((field) => {
            if (field.type === "checkbox" || field.type === "radio") {
                field.checked = false;
            } else {
                field.value = "";
            }
        });
        formError.textContent = "";
    }
});

// Task 10.3:Event Bubbling & Delegation 

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
});

// Click on Child - what order do the logs appear?
// Answer: Child → Parent → Grandparent (bubbling up)

// Exercise 2: Event Delegation
// BAD: Adding listeners to each item
const items = document.querySelectorAll("li");
items.forEach(item => {
    item.addEventListener("click", handleClick);
});
// Problem: New items won't have the listener!

// GOOD: Delegate to parent
document.querySelector("ul").addEventListener("click", function(event) {
    // Check if clicked element is an li
    if (event.target.matches("li")) {
        handleClick(event);
    }
    
    // Or check for a class
    if (event.target.classList.contains("item")) {
        handleClick(event);
    }
});
// Build:Delegate Task List Creat a task list where
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const task = document.createElement("li");
    task.className = "task";
    task.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-task";
    deleteButton.textContent = "Delete";

    task.appendChild(deleteButton);
    taskList.appendChild(task);
    taskInput.value = "";
});

taskList.addEventListener("click", (event) => {
    const task = event.target.closest(".task");
    if (!task) return;

    if (event.target.closest(".delete-task")) {
        task.remove();
        return;
    }

    task.classList.toggle("completed");
});

// Task 10.4: Form Handling

const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

// Real-time validation
nameInput.addEventListener("input", function(event) {
    const value = event.target.value;
    
    if (value.length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
    } else {
        clearError(nameInput);
    }
});

emailInput.addEventListener("input", function(event) {
    const value = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(value)) {
        showError(emailInput, "Please enter a valid email");
    } else {
        clearError(emailInput);
    }
});

// Form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();  // Stop form from submitting
    
    // Get all form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    console.log("Form data:", data);
    
    // Validate all fields
    if (isValid(data)) {
        // Submit via fetch or show success
        showSuccess("Form submitted successfully!");
        form.reset();
    }
});

function showError(input, message) {
    // Add error styling and message
    input.classList.add("error");
    // Create or update error message element
}

function clearError(input) {
    input.classList.remove("error");
    // Remove error message
}