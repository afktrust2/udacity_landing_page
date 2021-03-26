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
const navbar = document.querySelector('#navbar__list');
let sections = document.querySelector('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

//Function to check if an element is in viewport or not.
function viewport(box) {
  const bounds = box.getBoundingClientRect();
  if (bounds.top >= -200 &&
     bounds.botton <= (window.innerheight) &&
     bounds.left >= 0 &&
     bounds.right <= (window.innerWidth)){
       Return true
     }
}

//Function to remove active classes

function disableSection() {
  sections.forEach((element) => {
    element.classList.remove('your-active-class')
  });
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Add class 'active' to section when near top of viewport
function activeSection(section) {
  section.classList.add('your-active-class')
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build navbar

// Scroll to section on link click


// Set sections as active
