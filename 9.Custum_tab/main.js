const tabContainer = document.querySelector('.container');
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll('.conetent');

tabContainer.addEventListener("click", (event) => {
    const currentId = event.target.dataset.id;

    if (currentId) {
        // remove active from all buttons
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // add active to clicked button
        event.target.classList.add('active');

        // remove active from all content
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // add active to the correct content
        const currentElement = document.getElementById(currentId);
        currentElement.classList.add('active');
    }
});
