const quoteWrapper = document.querySelector('.quote-wrapper');
const button = document.querySelector('.referesh-btn');

function fetchRandomQuote(){
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then((result) => {
            const randomIndex = Math.floor(Math.random() * result.length);
            displayQuote(result[randomIndex]);
        })
        .catch((e) => console.error("Error fetching quote:", e));
}

function displayQuote(getquote) {
    quoteWrapper.innerHTML = `
        <div class="quote-item"> 
        <p> ${(getquote.title)} </p>
        <br/>
        <br/>
        <p>${(getquote.body)} </p>
        <p> ${(getquote.title)} </p>
        
        </div>
    `
}

fetchRandomQuote();

button.addEventListener('click', ()=> {
    fetchRandomQuote();
});