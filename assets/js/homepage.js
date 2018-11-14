'use strict';

require('slick-carousel/slick/slick.css');
require('slick-carousel/slick/slick-theme.css');

const $ = require('jquery');
require('slick-carousel');

$(document).ready(function () {
    $('.slider-content').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 750,
        fade: true,
        cssEase: 'linear'
    });
});
