'use strict';

import 'lightgallery/dist/css/lightgallery.css';
import '../css/media.css';

import $ from 'jquery';
import 'lightgallery';
import 'lg-video';

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
