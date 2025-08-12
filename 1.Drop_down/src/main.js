const data = [
  {
    id: "1",
    question: "What are accordion components?",
    answer:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
  },
  {
    id: "2",
    question: "What are they used for?",
    answer:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
  },
  {
    id: "3",
    question: "Accordion as a musical instrument",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
  },
  {
    id: "4",
    question: "Can I create an accordion component with a different framework?",
    answer:
      "Yes of course, it is very possible to create an accordion component with another framework.",
  },
];


const accordionwrapper = document.querySelector('#accordion');

function craeteAccordionData(){
    accordionwrapper.innerHTML = data.map(dataItem => `
        <div class = "flex-col p-2 max-w-100 justify-center items-center bg-gray-800 rounded-lg shadow-lg mb-4"> 
        
        <div class ="flex gap-2 p-2"> 
        <h3 class ="text-amber-50" id="according_title"> ${dataItem.question} </h3>
        <button class ="text-blue-300"> click </button>
        </div>

        
        <div> 
        <p class ="text-cyan-200 hidden"> ${dataItem.answer}</p>
        </div>
        

        </div>
    `).join(" ");
}

craeteAccordionData();


const getAccordionItems = document.querySelectorAll('#according_title');

getAccordionItems.forEach(currentItem => {
    currentItem.addEventListener('click', (event) => {
        if (currentItem.classList.contains("active")) {
            currentItem.classList.remove("active");
        } else {
            let getAlreadyActiveClasses = document.querySelectorAll('.active');
            getAlreadyActiveClasses.forEach(currentActiveItem => {
                currentActiveItem.classList.remove('active');
            });
            currentItem.classList.add('active');
        }

        const answer = currentItem.parentElement.nextElementSibling.querySelector('.text-cyan-200');
        if (answer) {
            answer.classList.toggle('hidden');
        }
    });
});