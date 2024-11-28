// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Function to add or remove 'in-view' class based on viewport visibility
function handleScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('in-view'); // Add the class if in view
        } else {
            element.classList.remove('in-view'); // Remove the class if not in view
        }
    });
}

// Run on scroll
window.addEventListener('scroll', handleScroll);

// Initial check in case elements are already in view
handleScroll();


// Inspo från denna sidan: https://codepen.io/joesayegh/pen/jOEVPKO //
var burgerMenu = document.getElementById('burger');

var overlay = document.getElementById('menu');

burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});


// Contact Me Scroll Funktion //

function myFunction() {
    const element = document.getElementById("content");
    element.scrollIntoView({ block: 'center',  behavior: 'smooth' });
  }


// Pop up video funktion //

function playVideo() {
    var video = document.getElementById("video")

    video.classList.add("video-active")

    var background = document.getElementById("background")

    background.classList.add("background-active")

    var cross = document.getElementById("exit-icon")

    cross.classList.add("exit-active")

    video.play();
}

function closeVideo() {
    var video = document.getElementById("video")

    video.classList.remove("video-active")

    var background = document.getElementById("background")

    background.classList.remove("background-active")

    var cross = document.getElementById("exit-icon")

    cross.classList.remove("exit-active")

    video.pause();
}

function dropDown(button) {
    const container = button.closest(".tab-container"); // Find the nearest .tab-container
    const content = container.querySelector(".tab-content"); // Find the .tab-content within that container

    content.classList.toggle("tab-content-open"); // Toggle the class for this specific content
}
