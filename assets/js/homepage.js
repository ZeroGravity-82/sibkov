'use strict';

require('slick-carousel/slick/slick.css');
require('slick-carousel/slick/slick-theme.css');
require('../css/homepage.css');

const $ = require('jquery');
require('slick-carousel');

$(document).ready(function () {
    $('.js-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        arrows: true,
        dots: true,
        fade: true,
        infinite: true,
        pauseOnHover: true,
        pauseOnFocus: false,
        speed: 750,
    });
});
