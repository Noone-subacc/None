// script.js

// Add event listener to navigation menu
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    nav.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const href = event.target.getAttribute('href');
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add event listener to call-to-action button
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta button');
    ctaButton.addEventListener('click', function() {
        alert('Get started today!');
    });
});
