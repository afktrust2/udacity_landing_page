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
 *
 */
let navbarList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

//Function to check if an element is in viewport or not. Added from a Udacity
//Mentor.
function isInViewport(elem) {
    const distance = elem.getBoundingClientRect();

    return (
        distance.top >= -300 &&
        distance.left >= 0 &&
        distance.bottom <= (1.3 * window.innerHeight) &&
        distance.right <= (window.innerWidth)
    );
};

//Function to remove active classes
function deactivateSections() {
    sections.forEach((element) => {
        element.classList.remove("your-active-class", "active");
    });
}

function deactivateNavLinks() {
    let navbarAnchors = document.querySelectorAll(".nav__hyperlink");
    navbarAnchors.forEach((element) => {
        element.classList.remove("active-nav");
    });
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Add class 'active' to section when near top of viewport
function activateCurrentSection(currentSection) {
    currentSection.classList.add("your-active-class", "active");

    deactivateNavLinks();
    activateNavLinks(currentSection.getAttribute('id'));
}

function activateNavLinks(currentSectionId) {
    let navbarAnchors = document.querySelectorAll(".nav__hyperlink");
    navbarAnchors.forEach((element) => {
        if (element.getAttribute('href') == `#${currentSectionId}`) {
            element.classList.add("active-nav");
        }
    });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
function buildNavbar() {
    sections.forEach((element) => {
        let listItem = document.createElement("li");
        listItem.classList.add("navbar__list__item");
        let sectionName = element.getAttribute("data-nav");
        let currentId = element.getAttribute("id");
        listItem.innerHTML = `<a href="#${currentId}" class="nav__hyperlink">${sectionName}</a>`;
        navbarList.appendChild(listItem);
    });
}

// Scroll to section on link click
buildNavbar();

// Set sections as active
window.addEventListener('scroll', function(event) {
    event.preventDefault();

    sections.forEach((element) => {
        if (isInViewport(element)) {
            deactivateSections();
            activateCurrentSection(element);
        } else if (window.scrollY == 0) {
            deactivateSections();
            deactivateNavLinks();
        }
    });
});
