const Themebtnchange = document.querySelector('.change-theme');
const change1 = document.querySelector('body');
const change2 = document.querySelector('.container');
const change3 = document.querySelector('.heading');
const change4 = document.querySelector('.para');

Themebtnchange.addEventListener('click', ()=> {
    if(change1.classList.contains('light') && change2.classList.contains('active') 
        && change3.classList.contains('true') && change4.classList.contains('true2')) {
        change1.classList.remove('light');
        change1.classList.add('dark');
        change2.classList.remove('active');
        change2.classList.add('deactive');
        change3.classList.remove('true');
        change3.classList.add('false');
        change4.classList.remove('true2');
        change4.classList.add('false2');
    }
    else{
        change1.classList.remove('dark');
        change1.classList.add('light');
        change2.classList.remove('deactive');
        change2.classList.add('active');
        change3.classList.remove('false');
        change3.classList.add('true');
        change4.classList.remove('false2');
        change4.classList.add('true2');
    }
})