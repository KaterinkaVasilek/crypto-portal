'use strict';

//burger-menu
let toggleButton = document.querySelector(".toggle-menu"), 
navBar = document.querySelector(".nav__bar"); 

toggleButton.addEventListener("click", (function () { navBar.classList.toggle("toggle") }));

let burgerBtn = document.querySelector('#btn');
let list = document.querySelector('#nav__list');
burgerBtn.addEventListener('click', function(){
list.classList.toggle('active');
})

//Scroll to top
arrowTop.onclick = function() {
    window.scrollTo(pageXOffset, 0);
};

window.addEventListener('scroll', function() {
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});

