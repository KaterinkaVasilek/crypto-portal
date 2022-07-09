'use strict';

let toggleButton = document.querySelector(".toggle-menu"), 
navBar = document.querySelector(".nav__bar"); 

toggleButton.addEventListener("click", (function () { navBar.classList.toggle("toggle") }));

let burgerBtn = document.querySelector('#btn');
let list = document.querySelector('#nav__list');
burgerBtn.addEventListener('click', function(){
list.classList.toggle('active');
})

function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
        arrowUp.classList.add('up__btn');
    }
    if (scrolled < coords) {
        arrowUp.classList.remove('up__btn');
    }
}

function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
    }
}

let arrowUp = document.querySelector('.up');

window.addEventListener('scroll', trackScroll);
arrowUp.addEventListener('click', backToTop);
