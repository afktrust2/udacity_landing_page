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
var nav = document.getElementById('navbar__list');
var sectionList = document.getElementsByClassName('landing__container');
var activeClass = "your-active-class";
let activeSection = document.getElementById('section1');


/**
 * End Global Variables
 * Begin Main Functions
 *
*/

// build the nav

for (let i = 1; i <= sectionList.length; i++) {
  var box = document.createElement('li');
  box.setAttribute('id', '#nav' + i);
  let navId = document.getElementById('#nav' + i);
  var uList = document.createElement('a');
  uList.classList.add('menu__link');
  uList.setAttribute('href', '#section' + i);
  uList.innerText = 'Section' + i;
  box.appendChild(uList);
  nav.appendChild(box);
};

// Add class 'active' to section when near top of viewport
let navActive = document.getElementById("nav1")

for (let i = 1; i <= sectionList.length; i++) {
  var navId = document.getElementById('nav' + i);
  let sections = document.getElementById('section' + i);
    navId.addEventListener('click', function(e) {
      e.preventDefault();
      sections.scrollIntoView();

      navActive.classList.remove(activeClass);
      navId.classLisst.add(activeClass);
      navActive = navId;

      var section = document.getElementById('section' + i);
      activeSection.classList.remove(activeClass);
      section.classList.add(activeClass);
      activeSection = section;
    });
};


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
