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
let navbar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 *
 */

//Function to check if an element is in viewport or not.
function viewport(box) {
    const bounds = box.getBoundingClientRect();
    return (
        bounds.top >= -200 &&
        bounds.left >= 0 &&
        bounds.bottom <= (1.3 * window.innerHeight) &&
        bounds.right <= (window.innerWidth)
    );
}

//Function to remove active classes

function disableSection() {
    sections.forEach((element) => {
        element.classList.remove('your-active-class', 'active');
    });
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Add class 'active' to section when near top of viewport
function activeSection(section) {
    section.classList.add('your-active-class', 'active');
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build navbar
function makeNavBar() {
    sections.forEach((element) => {
        let list = document.createElement('li');
        list.classList.add('navbar__list__item');
        let sectionName = element.getAttribute('data-nav');
        let idName = element.getAttribute('id');
        list.innerHTML = `<a href='#${idName}' class='nav__hyperlink'>${sectionName}</a>`;
        navbar.appendChild(list);
    });
}

makeNavBar();

// Set sections as active
window.addEventListener('scroll', function(event) {
    event.preventDefault();

    sections.forEach((element) => {
        if (viewport(element)) {
            disableSection();
            activeSection(element);
        } else if (window.scrollY == 0) {
            disableSection();
        }
    });
});
