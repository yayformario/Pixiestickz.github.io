//select sections from html
const sections = document.querySelectorAll('.section');
//Select buttons from controls (Parent)
const sectBtns = document.querySelectorAll('.controls');
//Select specific button from nested control (Actual button)
const sectBtn = document.querySelectorAll('.control');
//get all sections from main class
const allSections = document.querySelector('.main-content');

//Function for page transitions
function pageTransitions () {
    //Button click active class
    for (let i = 0; i < sectBtn.length; i++){
        //event listener for the current indexed button
        //the "this" keyword only works with regular functions and NOT arrow functions (doesn't exist): () =>
        sectBtn[i].addEventListener('click', function() {
            //Create currentBtn
            let currentBtn = document.querySelectorAll('.active-btn');
            //Whenever first button is not being clicked, it is replaced with an empty string and gets rid of class
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            
            //Current function's class name incremented by active button
            this.className += ' active-btn'
        })
    }//end for loop

    //Sections Active Class
    //e is for event
    allSections.addEventListener('click', (e) => {
        //this targets the element that we click (visible in console)
        //console.log(e.target);

        //the id gets whichever dataset we click
        const id = e.target.dataset.id;

        //if we were able to grab an id
        if (id){
            //Remove selected button from the rest
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })

            //We want to add the class to whatever button we clicked on
            e.target.classList.add('active')

            //Hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active')
            })

            //Element stores whatever id gets passed in
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}//end page transitions

//Page Transitions call
pageTransitions();