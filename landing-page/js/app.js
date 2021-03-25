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
var backgroundColor = section.css("background-color");
var navbar = document.getElementsByClassName('navbar__menu');
var navbarHeight = navbar.style.height;
var position = navbar.offsetTop - navbarHeight;




/**
 * End Global Variables
 * Start Helper Functions
 *
*/

// This determines the position of the screen. Edited from
// https://www.kirupa.com/html5/get_element_position_using_javascript.htm
// to fit the need of the program
function scrollPosition(el) {
  var yPos = 0;

  while (el) {
    if (el.tagName == "BODY") {
      var yScroll = el.scrollTop || document.documentElement.scrollTop;

      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;
  }
  return {
    y: yPos
  };
}

window.addEventListener("scroll", updatePosition, false);

function updatePosition() {
  position = getPosition(myElement);
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
