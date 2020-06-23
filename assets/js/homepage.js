'use strict';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/homepage.css';

import $ from 'jquery';
import 'slick-carousel';

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
