const openModelbtn = document.querySelector('.openModal');
const modelbackground = document.querySelector('.model-background');
const closeIcon = document.querySelector('.close-btn');
const closebtn = document.querySelector('.Close');
const Submitbtn = document.querySelector('.submit');


openModelbtn.addEventListener('click', ()=> {
    modelbackground.style.display = "block";
})

closeIcon.addEventListener('click' , ()=> {
    modelbackground.style.display = "none";
})

closebtn.addEventListener('click' , ()=> {
    modelbackground.style.display = "none";
})

Submitbtn.addEventListener('click' , ()=> {
    modelbackground.style.display = "none";
})

window.addEventListener('click', (e) => {
    if (e.target === modelbackground) {
        modelbackground.style.display = "none";
    }
});