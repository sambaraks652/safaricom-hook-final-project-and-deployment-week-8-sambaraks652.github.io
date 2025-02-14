"use strict";

const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelector(".nav-menu .nav-link");

menuOpenButton.addEventListener("click", ()=>{
  //Toggle mobile menu visibilty
  document.body.classList.toggle("show-mobile-menu");

});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.
click());

navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});


// Initialize swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
     grabCursor: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
         slidesPreview: 1
        },
        768: {
            slidesPreview: 2
        },
        1024: {
            slidesPreview: 3
        }
    }
  });