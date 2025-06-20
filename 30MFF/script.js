document.addEventListener('DOMContentLoaded', function() {

    // --- Smooth Scrolling for Navigation ---
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });


    // --- Pixelation Slider Functionality ---
    const pixelSlider = document.getElementById('pixel-slider');
    const pixelOverlay = document.getElementById('pixel-overlay');

    // Function to update the background pixel size
    function updatePixelation() {
        // We get the slider's value.
        const sliderValue = pixelSlider.value;

        // We use the value to set the background-size property.
        // A smaller value makes the squares smaller (less pixelated).
        // A larger value makes them bigger (more pixelated).
        const newSize = `${sliderValue}px ${sliderValue}px`;

        pixelOverlay.style.backgroundSize = newSize;
    }

    // Add an event listener to the slider.
    // 'input' event fires every time the slider value changes.
    if (pixelSlider && pixelOverlay) {
        pixelSlider.addEventListener('input', updatePixelation);

        // Set the initial pixelation based on the slider's default value
        updatePixelation();
    } else {
        console.error("Slider or overlay element not found.");
    }

});
