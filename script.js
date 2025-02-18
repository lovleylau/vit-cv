document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-links');
    
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('header')) {
            navLinks.classList.remove('active');
        }
    });

    const contactForm = document.querySelector('.input-box');
    const emailInput = contactForm.querySelector('input[type="text"]');
    const submitBtn = contactForm.querySelector('.btn');

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        submitBtn.textContent = 'Sending...';
        setTimeout(() => {
            alert('Thank you for your message! I will get back to you soon.');
            emailInput.value = '';
            submitBtn.textContent = 'Submit';
        }, 1500);
    });

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});