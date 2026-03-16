
document.addEventListener('DOMContentLoaded', () => {
    const signUpBtn = document.getElementById('signUpBtn');
    const signInBtn = document.getElementById('signInBtn');

    // Button Click Logic
    signUpBtn.addEventListener('click', () => {
        console.log("Redirecting to Sign Up...");
        // Future Logic: Show Sign-up Modal
    });

    signInBtn.addEventListener('click', () => {
        console.log("Opening Sign In Modal...");
        // Future Logic: Show Login Modal
    });

    // Optional: Add a subtle parallax effect to bubbles based on mouse movement
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) / 50;
        const moveY = (e.clientY - window.innerHeight / 2) / 50;
        
        document.querySelector('.bubble-container').style.transform = 
            `translate(${moveX}px, ${moveY}px)`;
    });
});
