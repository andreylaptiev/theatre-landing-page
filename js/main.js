'use strict';


// burger menu start
const navigation = document.querySelector('.navigation');
const burgerMenuBtn = document.querySelector('.header-top__menu');

if (burgerMenuBtn) {
  burgerMenuBtn.addEventListener('click', () => {
    document.body.classList.toggle('_lock');
    burgerMenuBtn.classList.toggle('_active');
    navigation.classList.toggle('_active');
  });
};

// hover sidebar image links
// names match html 'alt' attribute for each image
const activeSocialImages = {
  'instagram': 'img/instagram-icon-active.svg',
  'facebook': 'img/facebook-icon-active.svg',
  'vkontakte': 'img/vkontakte-icon-active.svg',
  'youtube': 'img/youtube-icon-active.svg',
}

const defaultSocialImages = {
  'instagram': 'img/instagram-icon.svg',
  'facebook': 'img/facebook-icon.svg',
  'vkontakte': 'img/vkontakte-icon.svg',
  'youtube': 'img/youtube-icon.svg',
}

function activeImage(e) {
  e.target.src = activeSocialImages[e.target.alt];
};

function defaultImage(e) {
  e.target.src = defaultSocialImages[e.target.alt];
};

const socialImages = document.querySelectorAll('.header-side__social-image');
socialImages.forEach(image => image.addEventListener('mouseover', activeImage));
socialImages.forEach(image => image.addEventListener('mouseout', defaultImage));


// sticky navbar
const navbar = document.querySelector('.header-top');
const navbarPhone = document.querySelector('.header-top__phone');
// media query to hide phone number
const hidePhone = window.matchMedia('(min-width: 769px) and (max-width: 992px');
window.addEventListener('scroll', () => {
  if (window.scrollY >= 20) {
    navbar.classList.add('sticky');
    (hidePhone.matches) ? (navbarPhone.style.display = 'none') : false;
  } else {
    navbar.classList.remove('sticky');
    (hidePhone.matches) ? (navbarPhone.style.display = 'flex') : false;
  }
});


// header-main swiper
const headerSwiper = new Swiper('#header-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// products section swiper
const productsSwiper = new Swiper('#products-slider', {
  slidesPerView: 'auto',
});

// partners section swiper
const partnersSwiper = new Swiper('#partners-slider', {
  slidesPerView: 'auto',
  spaceBetween: 78,
});