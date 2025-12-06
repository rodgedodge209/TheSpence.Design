document.addEventListener('DOMContentLoaded', () => {
    
    // Function to set up an infinite scrolling carousel
    function setupInfiniteCarousel(trackSelector, itemSelector, speedSeconds) {
        const track = document.querySelector(trackSelector);
        if (!track) return; 

        // 1. Clone all original items
        const items = Array.from(track.querySelectorAll(itemSelector));
        items.forEach(item => {
            // 'true' means a deep clone (clones the element and its children)
            const clone = item.cloneNode(true); 
            clone.classList.add('clone'); // Add a class for identification if needed
            track.appendChild(clone);
        });

        // 2. Set the CSS animation duration dynamically (overwrites the default in CSS)
        // This is necessary to ensure the speedSeconds is applied accurately
        if (track.classList.contains('logo-carousel-track')) {
            track.style.animationDuration = `${speedSeconds}s`;
        } else if (track.classList.contains('project-carousel-track')) {
             // Only apply auto-scroll on desktop screens for project carousel
             if (window.innerWidth > 900) {
                 track.style.animationDuration = `${speedSeconds}s`;
             }
        }
    }

    // Setup Client Logo Carousel (faster speed for shorter track)
    setupInfiniteCarousel(
        '.client-section .logo-carousel-track', 
        '.client-logo', 
        40 // 40 seconds duration
    );

    // Setup Project Carousel (slightly slower speed for larger items)
    setupInfiniteCarousel(
        '.design-works-section .project-carousel-track', 
        '.project-item', 
        50 // 50 seconds duration
    );
});