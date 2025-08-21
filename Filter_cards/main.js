const categories = ['All' , 'Men' , "Women", 'kids'];
const content = [
    {
        id: 'Men',
        Label: 'Men shirt 1'
    },
    {
        id: 'Men',
        Label: 'Men shirt 2'
    },
    {
        id: 'Men',
        Label: 'Men shirt 3'
    },
    {
        id: 'Men',
        Label: 'Men shirt 4'
    },
    {
        id: 'Women',
        Label: 'Women shirt 1'
    },
    {
        id: 'Women',
        Label: 'Women shirt 2'
    },
    {
        id: 'Women',
        Label: 'Women shirt 3'
    },
    {
        id: 'Women',
        Label: 'Women shirt 4'
    },
    {
        id: 'kids',
        Label: 'kids shirt 1'
    },
    {
        id: 'kids',
        Label: 'kids shirt 2'
    },
    {
        id: 'kids',
        Label: 'kids shirt 3'
    },
    {
        id: 'kids',
        Label: 'kids shirt 4'
    },
]


const filterContainer = document.querySelector('.filter-container');
const  filterButton = document.querySelector('.fillter-btn');
const constentWrapper = document.querySelector('.content-wrapper');

function createCategorie() {
    categories.forEach(categories=> {
        const buttonElse = document.createElement('button');
        buttonElse.innerText =categories;
        buttonElse.classList.add('fillter-btn');
        buttonElse.setAttribute('data-filter',categories);

        filterButton.appendChild(buttonElse);
        
    })
}

function createContent(){
    content.forEach(contentItem => {
        const SingleContentItem = document.createElement('div');
        SingleContentItem.classList.add('cards',contentItem.id);
        SingleContentItem.textContent = contentItem.Label


        constentWrapper.appendChild(SingleContentItem);
    })
}


createCategorie();
createContent();


const allfilterButton =document.querySelectorAll('.fillter-btn');
const allCards =document.querySelectorAll('.cards');
