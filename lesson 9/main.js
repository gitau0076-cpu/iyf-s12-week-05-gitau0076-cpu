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

const bodyFromFooter = footer.closest("body");

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
const nav = document.querySelector("nav");
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