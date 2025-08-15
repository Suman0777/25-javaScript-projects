
const postListcontainer = document.querySelector('.Post-list-container');


// fetch usong Xhr

function fetchUsingXhr(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET' , 'https://jsonplaceholder.typicode.com/posts');
    xhr.responseType = 'json';
    xhr.send();


    xhr.onload = () => {
        if(xhr.status === 200) {
            displayResult(xhr.response)
        }
        else{
            console.log('ERROR');
        }
    }
}

function displayResult(post){
    postListcontainer.innerHTML = post.map(postItem => `
        
        <div class ="post-item">  
            <h1> ${postItem.title}</h1>
            <p> ${postItem.body} </P>       
        </div>
    `).join( " " );
}

fetchUsingXhr();