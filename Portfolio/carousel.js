// --- Logo Carousel Script (js/carousel.js) ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the track element
    const logoTrack = document.querySelector('.logo-carousel-track');

    // Safety check: only run if the element exists
    if (logoTrack) {
        // 2. Define the animation speed (in pixels per frame)
        const scrollSpeed = 0.4;

        // 3. Duplicate the logos to create the seamless loop illusion
        logoTrack.innerHTML += logoTrack.innerHTML;

        // 4. Initialize the current scroll position
        let currentScroll = 0;

        // 5. Define the function that updates the position on every frame
        function animateScroll() {
            // Calculate the distance one full set of original logos covers
            const resetPoint = logoTrack.scrollWidth / 2;

            // Decrease the scroll position by the defined speed
            currentScroll -= scrollSpeed;

            // Reset the position back to zero (the beginning of the duplicated set)
            if (currentScroll <= -resetPoint) {
                currentScroll = 0;
            }

            // Apply the new position using CSS translate (hardware accelerated)
            logoTrack.style.transform = `translateX(${currentScroll}px)`;

            // Continue the loop
            window.requestAnimationFrame(animateScroll);
        }

        // 6. Start the animation loop
        animateScroll();
    } else {
        console.warn("Logo track element (.logo-carousel-track) not found.");
    }
});