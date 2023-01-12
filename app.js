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
    }
}

//Page Transitions call
pageTransitions();