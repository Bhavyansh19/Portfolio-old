// Mobile Navigation Toggle
const menuIcon = document.querySelector('.menu-icon');
const navItems = document.querySelectorAll('.nav-item');

menuIcon.addEventListener('click', () => {
    navItems.forEach(item => item.classList.toggle('active'));
});

// Smooth Scroll
document.querySelectorAll('.nav-item').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Project Card Hover Effect
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    });
});

// Button Click Effects
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.style.transform = 'scale(0.98)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    });
});

