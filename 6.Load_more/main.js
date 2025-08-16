const productsContiner = document.querySelector('.products-container');

const LoadMoreButton = document.querySelector('.load-more-button');


let currentStep = 0;

async function fetchListofProduct (getcurrentStep) {
    try{
        const response = await fetch (
            `https://dummyjson.com/products?limit=10&skip=${
            getcurrentStep === 0 ? 0 : getcurrentStep * 10
            }`, 
            {
             method : "GET",
            }
    );

        const result = await response.json();
        
        if(result && result.products) displatProduct(result.products);

    }   
    catch(e) {
        console.log(e);
    }
}

function displatProduct(productList) {
    console.log(productList);

    productList.forEach(productItem => {
        
    const productItemrapper = document.createElement('div');

    const productTile = document.createElement('p');
    const productThumbnal = document.createElement('img');
    const productDescribtion = document.createElement('p');
    const productPrice = document.createElement('p');

    //appending the data from api
    productTile.textContent = productItem.title;
    productDescribtion.textContent = productItem.description;
    productPrice.textContent = productItem.price;
    productThumbnal.src = productItem.thumbnail;

    // //adding the class for the p and
    productTile.classList.add('product-title');
    productDescribtion.classList.add('product-desc');
    productPrice.classList.add('product-price');
    productThumbnal.classList.add('product-img');
    productItemrapper.classList.add('product-item');

    productItemrapper.appendChild(productThumbnal);
    productItemrapper.appendChild(productTile);
    productItemrapper.appendChild(productPrice);
    productItemrapper.appendChild(productDescribtion);

    productsContiner.appendChild(productItemrapper);
    });
}



fetchListofProduct(currentStep);

LoadMoreButton.addEventListener('click', () => {
      fetchListofProduct((currentStep+= 1));
});