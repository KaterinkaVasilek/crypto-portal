"use strict";let toggleButton=document.querySelector(".toggle-menu"),navBar=document.querySelector(".nav__bar");toggleButton.addEventListener("click",(function(){navBar.classList.toggle("toggle")}));let burgerBtn=document.querySelector("#btn"),list=document.querySelector("#nav__list");function trackScroll(){let t=window.pageYOffset,e=document.documentElement.clientHeight;t>e&&arrowUp.classList.add("up__btn"),t<e&&arrowUp.classList.remove("up__btn")}function backToTop(){window.pageYOffset>0&&(window.scrollBy(0,-80),setTimeout(backToTop,0))}burgerBtn.addEventListener("click",(function(){list.classList.toggle("active")}));let arrowUp=document.querySelector(".up");window.addEventListener("scroll",trackScroll),arrowUp.addEventListener("click",backToTop);