// Get highlight elements
const highlights = document.querySelectorAll('.highlight');

const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
}; 

// Create image elements  
highlights.forEach(highlight => {

    // Get image URLs for this highlight
    const highlightImages = shuffle(highlight.getAttribute('data-images').split(','));

    // Create image elements
    highlightImages.forEach(url => {
        const img = document.createElement('img');
        img.src = `images/${url}`;
        img.id = url;
        img.style.position = 'fixed';
        img.classList.add('popup-image');
        document.body.appendChild(img);
    });

    // Tracking for cycling through images
    let currentImageInd = 0;
    let currentImage = document.getElementById(highlightImages[currentImageInd]);

    // Show next image on hover
    highlight.addEventListener('mouseenter', () => {
        currentImage.style.display = 'block';
    });

    // Hide image on hover out
    highlight.addEventListener('mouseleave', () => {
        currentImage.style.display = 'none';

        currentImageInd++;
        if (currentImageInd >= highlightImages.length) {
            currentImageInd = 0;
        }
        currentImage = document.getElementById(highlightImages[currentImageInd]);
    });

});


const title = document.getElementById("poem-title");
const popup = document.getElementById("poem-title-popup");

title.addEventListener("mouseover", function () {
    popup.style.display = "block";
});

title.addEventListener("mouseout", function () {
    popup.style.display = "none";
});