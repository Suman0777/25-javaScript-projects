const HexBtn = document.querySelector('.hex-button');
const HexColorValue = document.querySelector('.hex-color-value');
const hexbg = document.querySelector('.hex-color-container');


//create random hex coloor

HexBtn.addEventListener('click', () => {
    let characterset = '0123456789abcdef';
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {   
        hexColor += characterset[Math.floor(Math.random() * characterset.length)];
    }
    HexColorValue.textContent = hexColor;
    hexbg.style.backgroundColor = hexColor;   
})


// rbg

const rbgbtn = document.querySelector('.rgb-button');
const getRedInputRange = document.querySelector('#red');
const getgreenInputRange = document.querySelector('#green');
const getblueInputRange = document.querySelector('#blue');
const rgbContainer = document.querySelector('.rgb-color-container');

rbgbtn.addEventListener('click', () => {
    let extractRed = getRedInputRange.value;
    let extractGreen = getgreenInputRange.value;
    let extractblue = getblueInputRange.value;

    rgbContainer.style.backgroundColor = `rgb(${extractRed}, ${extractGreen}, ${extractblue})`;
})