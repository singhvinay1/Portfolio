// This is a placeholder for any future JavaScript functionality. 

document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Switcher ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        // Update theme toggle button icon
        if (body.classList.contains('light-mode')) {
            themeToggleButton.textContent = '☀️';
        } else {
            themeToggleButton.textContent = '🌙';
        }
    });

    // --- Typing Animation ---
    const typingTextElement = document.getElementById('typing-text');
    const words = ["Web Applications.", "UI/UX Experiences.", "Scalable Solutions."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            // Deleting
            typingTextElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        } else {
            // Typing
            typingTextElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentWord.length) {
                isDeleting = true;
                // Pause before deleting
                setTimeout(type, 2000);
                return;
            }
        }
        const typeSpeed = isDeleting ? 100 : 200;
        setTimeout(type, typeSpeed);
    }
    type();

    // --- Active Nav Link Highlighting on Scroll ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links, .sidebar a');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}); 