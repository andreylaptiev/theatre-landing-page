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