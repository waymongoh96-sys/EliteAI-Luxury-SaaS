/* 
 * EliteAI Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '12px 0';
            navbar.style.background = 'rgba(255, 255, 255, 0.9)';
            navbar.style.boxShadow = 'var(--shadow-soft)';
        } else {
            navbar.style.padding = '24px 0';
            navbar.style.background = 'rgba(255, 255, 255, 0.7)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Parallax effect for hero mockup
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const mockup = document.querySelector('.hero-mockup');
        if (mockup && scrolled < 600) {
            const rotateX = Math.max(0, 5 - scrolled * 0.02);
            mockup.style.transform = `perspective(1000px) rotateX(${rotateX}deg) translateY(${scrolled * 0.05}px)`;
        }
    });

    // Simple fade-in animation for sections
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .hero-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(el);
    });
});
