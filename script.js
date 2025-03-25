// Smooth Scrolling
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Validation (basic example)
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Message sent successfully!');
});
