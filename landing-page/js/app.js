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
const nav = document.getElementsByClassName('navbar__list');
const sectionList = document.getElementsByClassName('landing__container');
const activeClass = "active";
let activeSection = document.getElementById('section1');


/**
 * End Global Variables
 * Start Helper Functions
 *
*/

for (let i = 1; i <= sectionList.length; i++) {
  var box = document.createElement('li');
  box.setAttribute('id', '#nav' + i);
  let navId = document.getElementById('#nav' + i);
  var uList = document.createElement('a');
  uList.classList.add('menu__link');
  uList.setAttribute('href', '#section' + i);
  uList.innerText = '#section' + i;
  nav.appendChild(box);
  entry.appendChild(uList);
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
