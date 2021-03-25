/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 * A Global variable is one that is defined outside a function, all scripts
 * and fucntions on the webpage can access it. Only works immediately for HTML that is not
 * dynamically created
 */
const nav_ul = document.getElementById("navbar__list");
const trialData = document.getElementsByClassName("landing__container");
const activeClassName = "your-active-class";
let activeSection = document.getElementById("section1");

/**
 * End Global Variables
 * Begin Main Functions

 */

// creating li for navigation bar and setting Ids and classes
for (let i = 1; i <= trialData.length; i++) {
    const entry = document.createElement("li");
    entry.setAttribute("id", `nav${i}`);
    let navId = document.getElementById(`nav${i}`);

//adding activeClassName to navigation "Section1" ONLY, so it's only on one nav section to begin
    if (i === 1) {
        entry.classList.add(activeClassName);
    }

// finalizing the navigation bar, with scroll anchors
    const trialA = document.createElement("a");
    trialA.classList.add("menu__link");
    trialA.setAttribute("href", "#section" + i);
    trialA.innerText = `Section ${i}`;
    nav_ul.appendChild(entry);
    entry.appendChild(trialA);
};

/*
* the let navActive can only be set AFTER the navigation bar has been made, putting this
* before it's creation makes it "null" or "undefined" everytime. It also cannot go inside either
* functions below it as this will reset it to "nav1" everytime there is a click.
* Must also be let instead of const as this stops it from being changed
* when clicked "navActive = navId"
*/
let navActive = document.getElementById("nav1");


/*
* the activeClassName can be changed for both the navigation and section when clicked
*/
for (let i = 1; i <= trialData.length; i++) {
const navId = document.getElementById(`nav${i}`);
let sections = document.getElementById(`section${i}`);
    navId.addEventListener("click", function (e) {
        e.preventDefault();
        sections.scrollIntoView();

        navActive.classList.remove(activeClassName);
        navId.classList.add(activeClassName);
        navActive = navId;

        const section = document.getElementById(`section${i}`);
        activeSection.classList.remove(activeClassName);
        section.classList.add(activeClassName);
        activeSection = section;
    });
};

/*
* now the activeClassName can be changed while scrolling through the page as well
*/
window.addEventListener("scroll", function () {
    for (let i = 1; i <= trialData.length; i++) {
        let sections = document.getElementById(`section${i}`);
        const navId = document.getElementById(`nav${i}`);
        // let activeScroll = sections.getBoundingClientRect();

        if (sections.getBoundingClientRect().top < window.innerHeight
        && sections.getBoundingClientRect().bottom >=  50
        && sections.getBoundingClientRect().top <= 50)
        {
        navId.classList.add(activeClassName);
        sections.classList.add(activeClassName);

         } else{
        navId.classList.remove(activeClassName);
        sections.classList.remove(activeClassName);
    }
    }
});
