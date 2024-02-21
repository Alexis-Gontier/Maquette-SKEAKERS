// MENU BURGER
let menu_open = document.querySelector('.burger-menu .open');
let menu_close = document.querySelector('.burger-menu .close');
let nav = document.querySelector('header nav ul');

menu_open.addEventListener("click", () => {
    menu_open.style.display = "none";
    menu_close.style.display = "block";
    nav.style.transform = "translateX(0)";
});

menu_close.addEventListener("click", () => {
    menu_open.style.display = "block";
    menu_close.style.display = "none";
    nav.style.transform = "translateX(-100%)";
});


// FOOTER
let date = document.querySelector('footer span');
let now = new Date();
date.textContent += now.getFullYear();


// SLIDER
let travelPictures = document.querySelectorAll('.slider .secondary-img img');
let largePicture = document.querySelector('.slider .main-img img');

travelPictures.forEach((picture) => {
    picture.addEventListener('mouseover', () => {
        let newSrc = picture.getAttribute('src');
        largePicture.setAttribute('src', newSrc);
    });
});

travelPictures.forEach((picture) => {
    picture.addEventListener('mouseout', () => {
        largePicture.setAttribute('src', "./assets/img/slider-1.png");
    });
});


// SLIDER RESPOSIVE
let btn_right = document.getElementById('btn-right');
let btn_left = document.getElementById('btn-left');
let j = 1;

btn_right.addEventListener('click', () => {
    if (j >= 4) {
        j = 1;
        largePicture.setAttribute('src', "./assets/img/slider-" + j + ".png");
    } 
    else {
        j += 1;
        largePicture.setAttribute('src', "./assets/img/slider-" + j + ".png");
    }
});

btn_left.addEventListener('click', () => {
    if (j <= 1) {
        j = 4;
        largePicture.setAttribute('src', "./assets/img/slider-" + j + ".png");
    } 
    else {
        j -= 1;
        largePicture.setAttribute('src', "./assets/img/slider-" + j + ".png");
    }
});


// PLUS MOINS
let moins = document.getElementById('minus');
let plus = document.getElementById('plus');
let items = document.getElementById('items');
let i = 0;
items.textContent += i;

moins.addEventListener("click", () => {
    if (i > 0) {
        items.textContent = '';
        i -= 1;
        items.textContent += i;
    } 
    else {
        console.log('tout est prevu :)');
    }
});

plus.addEventListener("click", () => {
    items.textContent = '';
    i += 1;
    items.textContent += i;
});


// POP-UP
let pop_up = document.querySelector('.pop-up');
let card = document.querySelector('.pop-up .card');
let card_close = document.querySelector('.pop-up .card i');
let btn_close = document.querySelector('.pop-up .card form button');

setTimeout(function() {
    pop_up.style.position = "fixed";
    card.style.display = "flex";
}, 1000);

card_close.addEventListener("click", () => {
    pop_up.style.position = "initial";
    card.style.display = "none";
});

btn_close.addEventListener("click", () => {
    pop_up.style.position = "initial";
    card.style.display = "none";
});

document.addEventListener("keydown", () => {
    if (event.keyCode === 27) {
        pop_up.style.position = "initial";
        card.style.display = "none";
    }
});

let form = document.querySelector('.pop-up .card form');

form.onsubmit = () => {
    return false;
}