'use strict';

require('slick-carousel/slick/slick.css');
require('slick-carousel/slick/slick-theme.css');
require('../css/slick-slider.css');

const $ = require('jquery');
require('slick-carousel');

$(document).ready(function () {
    $('.js-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        dots: true,
        fade: true,
        infinite: true,
        pauseOnHover: true,
        pauseOnFocus: false,
        speed: 750,
    });
});
