'use strict';

require('lightgallery/dist/css/lightgallery.css');
require('../css/media.css');

const $ = require('jquery');
require('lightgallery');
require('lg-video');

$(document).ready(function() {
    $('#video-gallery').lightGallery({
        selector: '.media-item',
        getCaptionFromTitleOrAlt: false,
        youtubePlayerParams: {
            modestbranding: 1,
            showinfo: 0,
            rel: 0,
            controls: 1
        }
    });
});
