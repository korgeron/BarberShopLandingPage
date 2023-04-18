// START OF MOBILE

const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');
const barBtn = document.querySelector('.bar-btn');
const xBtn = document.querySelector('.x-btn');

barBtn.addEventListener('click', ()=>{
    barBtn.style.display = 'none';
    xBtn.style.display = 'block';
    navbar.style.height = '30vh';
})

xBtn.addEventListener('click', ()=>{
    barBtn.style.display = 'block';
    xBtn.style.display = 'none';
    navbar.style.height = '0';
})


// END OF MOBILE