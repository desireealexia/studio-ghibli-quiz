// Modal functionality script
// Code adapted from: W3Schools (https://www.w3schools.com/howto/howto_css_modals.asp)

// Get the modals
var aboutModal = document.getElementById("about-modal");
var instructionsModal = document.getElementById("instructions-modal");
var contactModal = document.getElementById("contact-modal");

// Get the navigation links
var aboutLink = document.getElementById("about-link");
var instructionsLink = document.getElementById("instructions-link");
var contactLink = document.getElementById("contact-link");

// Get the close buttons
var closeButtons = document.querySelectorAll(".close-button");

// When the user clicks on a link, open the corresponding modal
aboutLink.onclick = function() {
    aboutModal.style.display = "block";
}

instructionsLink.onclick = function() {
    instructionsModal.style.display = "block";
}

contactLink.onclick = function() {
    contactModal.style.display = "block";
}

// When the user clicks on a close button, close the modal
closeButtons.forEach(function(button) {
    button.onclick = function() {
        button.parentElement.parentElement.style.display = "none";
    }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}
// End of modal functionality script -------------------------------------------------------- //

// Responsive Navigation Bar - Menu Toggle
// Code adapted from: Medium (https://volodymyrzh.medium.com/building-a-responsive-navigation-bar-with-css-593ffdb26887)

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const body = document.querySelector('body');
const backdrop = document.createElement('div');
backdrop.classList.add('menu-backdrop');

body.appendChild(backdrop);

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    backdrop.classList.toggle('display'); // Show or hide the backdrop

    // Toggle body scrolling
    body.classList.toggle('fixed-position');
    
    // Burger Animation
    burger.classList.toggle('toggle');
});

backdrop.addEventListener('click', function() {
    navLinks.classList.remove('nav-active');
    this.classList.remove('display'); // Hide the backdrop when clicked
    body.classList.remove('fixed-position');
    burger.classList.remove('toggle');
});

// End of responsive navigation bar toggle -------------------------------------------------------- //