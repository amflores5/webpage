// Select the hamburger icon and the navbar
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

// Add a click event listener to the hamburger icon
hamburger.addEventListener("click", function() {
    // Toggle the 'active' class on the navbar
    navbar.classList.toggle("active");
});