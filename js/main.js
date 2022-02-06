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

