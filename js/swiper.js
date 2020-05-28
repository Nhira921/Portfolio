'use strict';
{
    const mySwiper = new Swiper('.swiper-container', {
      // ここから
        loop: true,
        slidesPerView:  1,
        spaceBetween:   10,
        speed: 3000,
        centeredSlides: true,
        autoplay: {
            delay: 700,
        },
        pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        dynamicMainBullets: 1,
        clickable: true,
        type: 'bullets'
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
      // ここまでを追加
        breakpoints:  {
            767:{
                spaceBetween:10,
                slidesPerView: 2,
                centeredSlides: true,
            },
        }
    });
}

