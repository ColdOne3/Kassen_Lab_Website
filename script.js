// script.js

document.addEventListener('DOMContentLoaded', function () {
    var footer = document.querySelector('footer');

    function isAtEndOfPage() {
        return window.innerHeight + window.scrollY >= document.body.offsetHeight;
    }

    function toggleFooter() {
        if (isAtEndOfPage()) {
            footer.style.display = 'block';
        } else {
            footer.style.display = 'none';
        }
    }

    // Initial check on page load
    toggleFooter();

    // Check on scroll
    window.addEventListener('scroll', function () {
        toggleFooter();
    });
});

// nav bar fade
document.addEventListener('DOMContentLoaded', function () {
    var lastScrollTop = 0;
    var navbar = document.querySelector('nav');

    function toggleNavbar() {
        var scrollTop = window.scrollY;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.classList.add('hidden');
        } else {
            // Scrolling up
            navbar.classList.remove('hidden');
        }

        lastScrollTop = scrollTop;
    }

    // Initial check on page load
    toggleNavbar();

    // Check on scroll
    window.addEventListener('scroll', function () {
        toggleNavbar();
    });

    // Mouse over event for navigation bar
    navbar.addEventListener('mouseover', function() {
        navbar.classList.remove('hidden');
    });
});

// Publications drop down
function toggleYear(year) {
    const publicationList = document.getElementById(`year-${year}`).querySelector('.publication-list');
    
    if (publicationList.style.display === 'none' || publicationList.style.display === '') {
        publicationList.style.display = 'block';
    } else {
        publicationList.style.display = 'none';
    }
}

//hero transition
document.addEventListener('DOMContentLoaded', function() {
    const spans = document.querySelectorAll('.hero p span');

    spans.forEach(function(span, index) {
        setTimeout(function() {
            span.classList.add('fadeIn');
        }, index * 120);
    });
});

//Research cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            // Toggle active class for clicked card
            card.classList.toggle('active');

            // Reset other cards
            cards.forEach(function(c) {
                if (c !== card && c.classList.contains('active')) {
                    c.classList.remove('active');
                    const content = c.querySelector('.content');
                    content.style.opacity = '0';
                    setTimeout(() => {
                        content.style.display = 'none';
                    }, 500); // Hide content after fade out transition (0.5s)
                }
            });

            const content = card.querySelector('.content');
            
            if (card.classList.contains('active')) {
                // Increase delay before content appears
                setTimeout(() => {
                    content.style.opacity = '1'; // Start fade in after delay
                }, 1000); // Increase delay here (1000 milliseconds = 1 second)
            } else {
                content.style.opacity = '0'; // Hide content if card is not active
            }
        });
    });
});





//Home slideshow//

var slideIndex = 1;
showSlides(slideIndex);

var slideshowContainer = document.querySelector('.slideshow-container');
var arrows = document.querySelectorAll('.prev, .next');
var fadeTimeout;

// Function to show arrows
function showArrows() {
    arrows.forEach(function(arrow) {
        arrow.style.opacity = 1;
    });
}

// Function to hide arrows after a delay
function hideArrows() {
    fadeTimeout = setTimeout(function() {
        arrows.forEach(function(arrow) {
            arrow.style.opacity = 0;
        });
    }, 3000); // 3 seconds delay
}

// Show arrows on mouseover
slideshowContainer.addEventListener('mouseover', function() {
    showArrows();
    clearTimeout(fadeTimeout); // Clear timeout to prevent hiding arrows
});

// Hide arrows on mouseout
slideshowContainer.addEventListener('mouseout', function() {
    hideArrows();
});

// Function to navigate to next slide
function plusSlides(n) {
    showSlides(slideIndex += n);
    showArrows(); // Show arrows when navigating slides
    clearTimeout(fadeTimeout); // Clear timeout to prevent hiding arrows
    hideArrows(); // Start hiding arrows again after 3 seconds
}

// Function to display slides
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}







