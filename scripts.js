"use strict";

// START OF MOBILE PORTION

const menuBtn1 = document.querySelector('.menu-bars');
const menuBtn2 = document.querySelector('.menu-x');
const navbar = document.querySelector('.mobile-navbar');
const menuAway = document.querySelector('.content');
const navUL = document.querySelector('.mnavUL');


menuBtn1.addEventListener('click', ()=>{
    navUL.style.scale = "1";
    navbar.style.height = "40%";
    menuBtn1.style.display = "none";
    menuBtn2.style.display = "block";
})
menuBtn2.addEventListener('click', ()=>{
    navbar.style.height = "0px";
    menuBtn1.style.display = "block";
    menuBtn2.style.display = "none";
    navUL.style.scale = "0";
})


// END OF MOBILE PORTION