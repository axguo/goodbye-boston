let tapped = false;

// Get picture elements
const pictures = document.querySelectorAll('.picture');

const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
}; 

// Create image elements  
pictures.forEach(picture => {

    // Get image URLs for this picture
    const pictureImages = shuffle(picture.getAttribute('data-images').split(','));

    // Create image elements
    pictureImages.forEach(url => {
        const img = document.createElement('img');
        img.src = `images/${url}`;
        img.id = url;
        img.style.position = 'fixed';
        img.classList.add('popup-image');
        document.body.appendChild(img);
    });

    // Tracking for cycling through images
    let currentImageInd = 0;
    let currentImage = document.getElementById(pictureImages[currentImageInd]);

    // Show next image on hover
    picture.addEventListener('mouseenter', () => {
        currentImage.style.display = 'block';
    });

    // Hide image on hover out
    picture.addEventListener('mouseleave', () => {
        currentImage.style.display = 'none';

        currentImageInd++;
        if (currentImageInd >= pictureImages.length) {
            currentImageInd = 0;
        }
        currentImage = document.getElementById(pictureImages[currentImageInd]);
    });

    // Show on touch start
    picture.addEventListener('tap', () => {
        if (tapped) {
            currentImage.style.display = 'none';

            currentImageInd++;
            if (currentImageInd >= pictureImages.length) {
                currentImageInd = 0;
            }
            currentImage = document.getElementById(pictureImages[currentImageInd]);
            tapped = false
        }
        else {
            currentImage.style.display = 'block';
        }
    });

    // // Hide on touch end 
    // picture.addEventListener('touchend', () => {
    //     currentImage.style.display = 'none';

    //     currentImageInd++;
    //     if (currentImageInd >= pictureImages.length) {
    //         currentImageInd = 0;
    //     }
    //     currentImage = document.getElementById(pictureImages[currentImageInd]);
    // });

});


const title = document.getElementById("poem-title");
const popup = document.getElementById("poem-title-popup");

title.addEventListener("mouseover", function () {
    popup.style.display = "block";
});

title.addEventListener("mouseout", function () {
    popup.style.display = "none";
});

title.addEventListener("touchstart", function () {
    popup.style.display = "block";
});

title.addEventListener("touchend", function () {
    popup.style.display = "none";
});

title.addEventListener('touchmove', e => {
    e.preventDefault();
});