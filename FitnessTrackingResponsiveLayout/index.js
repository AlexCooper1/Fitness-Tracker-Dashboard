jQuery(function () {
    tippy('.tippy', {
        theme: 'light',
        size: 'big',
        arrow: true
    })
});

//progress bar animation scroll trigger

// Create the observer
const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('progressbar-animate');
        }
    });
});

// Tell the observer which elements to track
observer.observe(document.querySelector('.progressbar'));

