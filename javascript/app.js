// Create a sliding gallery of blog posts:
const slider = document.querySelector(".galleryContainer");
const slideImage = Array.from(document.querySelectorAll(".imageSlide"));
const navButton = document.querySelectorAll(".slideButton");
let i = 0;

// Show current slide:
// Slide using translateX 
let setPosition = (index) => {
    // after a lot of googling figured out how to get the item width!   
    let width = slideImage[index].getBoundingClientRect().width;
    // translate width of img * #imgs - images will sit side by side
    slider.style.transform = `translateX(-${width * index}px)`;
}

// adjust slide - from first and last slide
let moveImage = () => {
    // if you reach the end of the gallery - move back to start/first slide
    if (i === slideImage.length) {
        i = 0;
    // if you move left from the first image - go to end slide
    } else if (i == -1) {
        i = slideImage.length - 1;
    }
    setPosition(i);
};

// adjust slide using arrow "buttons"
navButton.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const rightButton = document.querySelector(".right");
        const leftButton = document.querySelector(".left");
        if (e.target === rightButton || e.target === rightButton.children[0]) {
            i++;
            return moveImage();
        } else if (e.target === leftButton || e.target === leftButton.children[0]) {
            i--;
            return moveImage();
        }
    })
})