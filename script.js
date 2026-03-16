document.addEventListener('DOMContentLoaded', () => {
    const bubbles = document.querySelectorAll('.user-bubble');

    // Smooth Parallax for Bubbles
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;

        bubbles.forEach(bubble => {
            bubble.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    });
});

