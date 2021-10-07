const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Loading
window.onload = function() {
    setTimeout(() => {
        $('.loader-container').classList.add('active');
    }, 1000);
}

// search-popup
const searchBtn = $('.header__navbar-buttons button:first-child');
const searchCloseBtn = $('.header__search-close-btn');

searchBtn.onclick = () => {
    $('.header__search--popup').classList.add('visibility');
}

searchCloseBtn.onclick = () => {
    $('.header__search--popup').classList.remove('visibility');
}

// Menu header
const menuBtn = $('.header__navbar-buttons button:last-child');
const menu_slideOut = $('.menu-slideOut__content-wrap');
const closeMenuBtn = $('.menu-slideOut__btn--close');
const downMenuBtn1 = $('.menu-slideOut__icon-down-1');
const downMenuBtn2 = $('.menu-slideOut__icon-down-2');
const menuContainer = $('.menu-slideOut__content-wrap');
const menuScreen = $('.header__menu--slideOut');
const submenuDown1 = $('.menu-slideOut__submenu');
const submenuDown2 = $('.menu-slideOut__submenu-1');

function hideMenu() {
    $('.menu-slideOut__overlay').style.display = 'none';
    menu_slideOut.style.transform = 'translateX(100%)';
    menu_slideOut.style.opacity = '0';
}

menuBtn.onclick = () => {
    $('.menu-slideOut__overlay').style.display = 'block';
    menu_slideOut.style.transform = 'translateX(0)';
    menu_slideOut.style.opacity = '1';
}

closeMenuBtn.onclick = () => {
    hideMenu();
}

menuScreen.onclick = () => {
    hideMenu();
}

menuContainer.addEventListener("click", (e) => {
    e.stopPropagation();
});

downMenuBtn1.addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.toggle('rotate-180');
    submenuDown1.classList.toggle('appearSubMenu');
});

downMenuBtn2.addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.toggle('rotate-180');
    submenuDown2.classList.toggle('appearSubMenu');
});

// Scroll header fixed
document.addEventListener('scroll', function() {
    if (window.scrollY > 250) {
        $('.header').classList.add('fixed-header');
    } else {
        $('.header').classList.remove('fixed-header');
    }
})

// Intro right 
const popularBtn = $('.container__intro-right-btns button:first-child');
const recentBtn = $('.container__intro-right-btns button:last-child');
const loadInfoRightOverlays = $$('.container__intro-right-overlay');
const loadInfoImgs = $$('.container__intro-right--loading');

function loaderInfoRight() {
    loadInfoRightOverlays.forEach((loadInfoRightOverlay) => {
        loadInfoRightOverlay.classList.add('fadeOut');
        window.setTimeout(() => {
            loadInfoRightOverlay.classList.remove('fadeOut');
        }, 1000);
    })
    loadInfoImgs.forEach((loadInfoImg) => {
        loadInfoImg.classList.add('fadeOut');
        window.setTimeout(() => {
            loadInfoImg.classList.remove('fadeOut');
        }, 1000);
    })
}

popularBtn.onclick = () => {
    popularBtn.classList.add('active');
    recentBtn.classList.remove('active');
    loaderInfoRight();
    setTimeout(() => {
        $('.container__intro-right-content.popular').style.display = 'block';
        $('.container__intro-right-content.recent').style.display = 'none';
    }, 1000)
}

recentBtn.onclick = () => {
    recentBtn.classList.add('active');
    popularBtn.classList.remove('active');
    loaderInfoRight();
    setTimeout(() => {
        $('.container__intro-right-content.recent').style.display = 'block';
        $('.container__intro-right-content.popular').style.display = 'none';
    }, 1000);
}

// Slider Celebration
const sliderMain = $('.container-right__celebration-content');
const sliderItems = $$('.container-right__celebration-item');
const prevBtn = $('.container-right__celebration-btn:first-child');
const nextBtn = $('.container-right__celebration-btn:last-child');
const slidesLength = sliderItems.length;
const sliderItemWidth = sliderItems[0].offsetWidth;
var index = 0;
var positionX = 0;

nextBtn.addEventListener("click", () => {
    HandleChangeSlide(1);
});

prevBtn.addEventListener("click", () => {
    HandleChangeSlide(0);
});

function HandleChangeSlide(direction) {
    if (direction === 1) {
        if (index >= slidesLength - 1) {
            index = slidesLength - 1;
            return;
        }
        positionX = positionX - sliderItemWidth;
        sliderMain.style = `transform: translateX(${positionX}px)`;
        index++;
    } else {
        if (index <= 0) {
            index = 0;
            return;
        }
        positionX = positionX + sliderItemWidth;
        sliderMain.style.transform = `translateX(${positionX}px)`;
        index--;
    }
}