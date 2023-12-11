// activ nav bar link
document.addEventListener('DOMContentLoaded', function () {
    // Get all nav links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });
});

// background image slider
document.addEventListener('DOMContentLoaded', function () {
    const sliderItems = document.querySelectorAll('.slider-item');
    let currentSlide = 0;

    function showSlide(index) {
      sliderItems.forEach((item, i) => {
        item.style.opacity = i === index ? 1 : 0;
      });
    }

    function changeSlide(direction) {
      currentSlide = (currentSlide + direction + sliderItems.length) % sliderItems.length;
      showSlide(currentSlide);
    }

    document.querySelector('.left').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.right').addEventListener('click', () => changeSlide(1));
    
    setInterval(() => changeSlide(1), 5000); // Automatic slide change every 5 seconds (adjust as needed)
  });