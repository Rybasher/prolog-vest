import { Swiper, Navigation, EffectFade, EffectCube, EffectFlip } from 'swiper';

Swiper.use([Navigation, EffectFade, EffectCube, EffectFlip]);


const swiper = new Swiper('.swiper-container', {
    direction: "horizontal",
    // coverflowEffect: {
    //     rotate: 30,
    //     slideShadows: false,
    // },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    // flipEffect: {
    //     slideShadows: false,
    // },
    // cubeEffect: {
    //     slideShadows: false,
    // },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})