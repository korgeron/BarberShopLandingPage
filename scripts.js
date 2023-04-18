// START OF MOBILE

const navbar = document.querySelector('.navbar');
const navButtons = document.querySelector('.nav-buttons');
const navLinksMobile = document.querySelector('.nav-links-mobile');
const barBtn = document.querySelector('.bar-btn');
const xBtn = document.querySelector('.x-btn');
const links = document.querySelectorAll('.link');
const popUp = document.querySelector('.pop-up');
const exitPopup = document.querySelector('#ok-fine');
const info = document.querySelector('.random-info');

const popUpWordBank = ['Woa there...', 'What are you doing...', 'Come on man...', 'Sorry but...', 'Did you think that would work buddy...'];




barBtn.addEventListener('click', ()=>{
    barBtn.style.display = 'none';
    xBtn.style.display = 'block';
    navbar.style.height = '50vh';
})

xBtn.addEventListener('click', ()=>{
    barBtn.style.display = 'block';
    xBtn.style.display = 'none';
    navbar.style.height = '0';
})

links.forEach(link => {
    link.addEventListener('click', ()=>{
    let randomizer = Math.floor((Math.random() * popUpWordBank.length));
        info.innerHTML = "";
        info.innerHTML = popUpWordBank[randomizer];
        if (window.innerWidth < 1000) {
            navButtons.style.display = 'none';
            navbar.style.height = '0';
        }
        if (window.innerWidth >= 1000) {
            navbar.style.display = 'none';
        }

        popUp.style.display = 'flex';


    })
})


exitPopup.addEventListener('click', ()=>{

    if (window.innerWidth < 1000) {
        popUp.style.display = 'none';
        navButtons.style.display = 'block';
        xBtn.style.display = 'none';
        barBtn.style.display = 'block';
    }
    navbar.style.display = 'flex';
    popUp.style.display = 'none';
})


// END OF MOBILE