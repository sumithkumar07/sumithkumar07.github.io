// Void Kernel Website Interactions
document.addEventListener('DOMContentLoaded', () => {
    // Subtle mouse parallax for the void background
    document.addEventListener('mousemove', (e) => {
        const bg = document.querySelector('.void-bg');
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        bg.style.transform = `translate(${x}px, ${y}px)`;
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Neural Pulsing Effect (Console Log for fun)
    console.log("%c VOID KERNEL DETECTED ", "background: #7000FF; color: white; font-weight: bold; padding: 5px;");
    console.log("Kernel Version: 1.0.4-Sovereign");
    console.log("Status: Neural Physics Stable");
});
