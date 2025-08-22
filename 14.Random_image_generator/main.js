const imagesWrappr = document.querySelector('.image-rapper');
const moreImages = document.querySelector('.More-five');

let count = 1;

function fetchRandomImages(getcount) {

    for(let i=0; i<=getcount+4; i++) {
        let imageElemnt = document.createElement('img');
        imageElemnt.src = `https://picsum.photos/300?random= ${i}`
        imagesWrappr.appendChild(imageElemnt);
    }

    count += 5;
}


fetchRandomImages(count);


moreImages.addEventListener('click', ()=>{
    fetchRandomImages((count+5));
});