const Slider = document.querySelector('.slider');
const dotContainer = document.querySelector('.dots-container');

async function fetchListOfImage() {
    try {
        const response = await fetch('https://picsum.photos/v2/list?page=1&limit=10', {
            method: 'GET'
        });

        const imagesList = await response.json();

        if (imagesList && imagesList.length > 0) displayImages(imagesList);

    } catch (error) {
        console.log(error);
    }
}

function displayImages(getimagesList) {
    Slider.innerHTML = getimagesList.map(item => `
        <div class="slide">
            <img src="${item.download_url}" alt="${item.author}">
        </div>
    `).join("");

    dotContainer.innerHTML = getimagesList.map((item, index) => `
        <span class="dot ${index === 0 ? 'active' : ''}" data-slide="${index}"></span>
    `).join("");

    initializeSlider();
}

fetchListOfImage();

function initializeSlider() {
    const Slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const Nextbtn = document.querySelector('.next');
    let currentSlide = 0;

    function activeDot(slide) {
        document.querySelectorAll('.dot').forEach(dotItem => dotItem.classList.remove('active'));
        const dot = document.querySelector(`.dot[data-slide="${slide}"]`);
        if (dot) dot.classList.add('active');
    }

    function changecurentslide(currentSlide) {
        Slides.forEach((slideItem, index) => {
            slideItem.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
        });
    }

    // Initialize slides position
    changecurentslide(currentSlide);

    Nextbtn.addEventListener('click', () => {
        currentSlide++;
        if (Slides.length - 1 < currentSlide) {
            currentSlide = 0;
        }
        changecurentslide(currentSlide);
        activeDot(currentSlide);
    });

    prevBtn.addEventListener('click', () => {
        currentSlide--;
        if (0 > currentSlide) {
            currentSlide = Slides.length - 1;
        }
        changecurentslide(currentSlide);
        activeDot(currentSlide);
    });

    dotContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('dot')) {
            const slideIndex = Number(e.target.getAttribute('data-slide'));
            currentSlide = slideIndex;
            changecurentslide(currentSlide);
            activeDot(currentSlide);
        }
    });
}