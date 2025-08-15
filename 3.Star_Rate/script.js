const stats = document.querySelectorAll('.star');
const rating = document.querySelector('.selected-rating value');

let currentTotalSelectedStar = -1;

stats.forEach((starItem, index) => {
    starItem.dataset.rating = index + 1;
    starItem.addEventListener('mouseover', handleMouseOver);
    starItem.addEventListener('mouseout', handleMouseOut);
    starItem.addEventListener('mouseleave', handleMouseLeave);

})


function handleMouseOver(event) {
    const currentRatingValue = event.target.dataset.rating;
    if(!currentRatingValue) return
    else {
        handleUpdateRatingStats(currentRatingValue);
    }
}

function handleUpdateRatingStats(getCurrentRatingValue){
    const ratingValue = Number(getCurrentRatingValue); // Convert to number
    for(let i=0; i<stats.length; i++){
        if(i < ratingValue){
            stats[i].classList.add('selected');
        } else {
            stats[i].classList.remove('selected');
        }
    }
}