// ============================================
// STEP 1 — Task 9.1: select TEN ways. Store each in a const, then log it.
// ============================================
const h1 =document.querySelector("h1");
console.log(h1);

const contentElements = document.querySelectorAll(".content");
console.log(contentElements);

const contactForm = document.getElementById("contact-form");
console.log(contactForm);

const emailInput = document.querySelector("#contact-form input[type='email']");
console.log(emailInput);

const navListItems = document.querySelectorAll("nav li");   
console.log(navListItems);

const firstNavLink = document.querySelector(".nav-link");
console.log(firstNavLink);

const lastParagraph = document.querySelector("article p:last-of-type"); 
console.log(lastParagraph);

const lastArticleParagraph = document.querySelector("article p:last-of-type");
console.log(lastArticleParagraph);

const submitButton = document.querySelector("#contact-form button[type='submit']");
console.log(submitButton);
const allH2InMain = document.querySelectorAll("main h2");
console.log(allH2InMain);
const footer = document.querySelector("footer");
console.log(footer);

// ============================================
// STEP 2 — Task 9.2: traverse. Say the route out loud before you write it.
// ============================================
const navInsideHeader = document.querySelector("header nav");
console.log(navInsideHeader);

const parentLiOfFirstNavLink = firstNavLink.parentElement;
console.log(parentLiOfFirstNavLink);

const nextSiblingOfArticle = document.querySelector("article").nextElementSibling;
console.log(nextSiblingOfArticle);

const childLiElementsOfUl = document.querySelector("ul").children;
console.log(childLiElementsOfUl);

const footerElement = document.querySelector("footer");
const bodyFromFooter = footerElement.parentElement;
console.log(bodyFromFooter);

const closestHeaderFromFirstNavLink = firstNavLink.closest("header");
console.log(closestHeaderFromFirstNavLink);

// ============================================
// STEP 3 — Task 9.3: change things
// ============================================
h1.textContent="My Awesome Page";

firstNavLink.href="https://developer.mozilla.org";
firstNavLink.target="_blank";
firstNavLink.rel="noopener";

const article = document.querySelector("article");
const dataId = article.dataset.id;
const dataCategory = article.dataset.category;
article.dataset.status="reviewed"; 

const firstContentParagraph = document.querySelector(".content p");
firstContentParagraph.classList.add("highlight");   
const secondContentParagraph = document.querySelectorAll(".content p")[1];
secondContentParagraph.classList.add("highlight");

const userInput = `<img src="x" onerror="alert('hacked!')">`;
document.getElementById("unsafe").innerHTML = userInput;
document.getElementById("safe").textContent = userInput;
// I would use textContent for a user's comment to prevent XSS attacks and ensure that any HTML tags are treated as plain text rather than executable code.

// ============================================
// STEP 4 — Task 9.4: create, remove, clone
// ============================================
function addNavItem(text, href) {
    const li = document.createElement("li");
    const link= document.createElement("a");

    link.classList.add("nav-link");
    link.href=href;
    link.textContent=text;
   
    li.appendChild(link);

    const navList = document.querySelector(".nav-list");
    if (navList) {
        navList.appendChild(li);
    }
}
    addNavItem("Blog", "#blog");
    addNavItem("Portfolio", "#portfolio");

const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";

const firstArticleP= document.querySelector("article");
if (firstArticleP) {
    firstArticleP.insertAdjacentElement("beforebegin", newParagraph);
}

const firstNavLink = document.querySelector(".nav-link");
if (firstNavLink) {
    const clonedLi = firstNavLink.cloneNode(true);
    clonedLi.textContent="Cloned";
}
const navList = document.querySelector(".nav-list");
if (navList) {
    navList.prepend(clonedLi);
}

if (footerElement) {
    footerElement.remove();
}
