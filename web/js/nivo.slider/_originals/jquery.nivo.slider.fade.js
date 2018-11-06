/*
 * jQuery Nivo Slider v3.2
 * http://nivo.dev7studios.com
 *
 * Copyright 2012, Dev7studios
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Урезан функционал, оставлен только эффект 'fade'.
 * Добавлена ленивая загрузка изображений. За основу взят:
 * https://github.com/vishalyadav/Nivo-Slider-Lazy-Load-v2.
 */

(function($) {
    var NivoSlider = function(element, options){
        // Defaults are below
        var settings = $.extend({}, $.fn.nivoSlider.defaults, options);

        // Useful variables. Play carefully.
        var vars = {
            currentSlide: 0,
            currentImage: '',
            totalSlides: 0,
            running: false,
            stop: false
        };

        // Get this slider
        var slider = $(element);
        slider.data('nivo:vars', vars).addClass('nivoSlider');

        // Find our slider children
        var kids = slider.children();

        kids.each(function() {
            var child = $(this);
            child.css('display','none');
            vars.totalSlides++;
        });

        // Preload the next image in the kids collection
        var preload_next_image = function() {
            var next = vars.currentSlide + 1;
            if (next >= kids.length || next < 0) { next = 0; }
            var img = $(kids[next]);
            img.attr('src', img.data('src'));
        };

        // Set startSlide
        if(settings.startSlide >= vars.totalSlides) { settings.startSlide = vars.totalSlides - 1; }
        if(settings.startSlide < 0) { settings.startSlide = 0; }
        vars.currentSlide = settings.startSlide;

        // Get initial image
        vars.currentImage = $(kids[vars.currentSlide]);

        // Set first background
        var sliderImg = $('<img/>').addClass('nivo-main-image');
        slider.append(sliderImg);
        // При ширине рабочей области менее 768 пикселей только создаётся DOM-элемент для
        // фонового изображения, само изображение не загружается.
        if(!window.matchMedia("(max-width: 767px)").matches) {
            sliderImg.attr('src', vars.currentImage.data('src')).show();
            preload_next_image();
        }

        // Detect Window Resize
        $(window).resize(function() {
            // Если после изменения размера рабочей области, её ширина составляет менее 768 пикселей, -
            // фоновое изображение не загружается.
            if(window.matchMedia("(max-width: 767px)").matches) { return ; }
            slider.children('img').width(slider.width());
            sliderImg.attr('src', vars.currentImage.data('src'));
            sliderImg.stop().height('auto');
            $('.nivo-slice').remove();
        });

        // In the words of Super Mario "let's a go!"
        var timer = 0;
        if(kids.length > 1){
            timer = setInterval(function(){ nivoRun(slider, kids, settings); }, settings.pauseTime);
        }

        // Event when Animation finishes
        slider.bind('nivo:animFinished', function(){
            sliderImg.attr('src', vars.currentImage.data('src'));
            vars.running = false; 

            // Preload the next image (when found)
            preload_next_image();
            // Restart the timer
            if (timer === '' ) {
                timer = setInterval(function(){ nivoRun(slider, kids, settings); }, settings.pauseTime);
            }
        });
        
        // Add slices for slice animations
        var createSlices = function(slider, settings, vars) {
            $('img[src="'+ vars.currentImage.data('src') +'"]', slider).not('.nivo-main-image').width(slider.width()).css('visibility', 'hidden').show();
            var sliceHeight = $('img[src="'+ vars.currentImage.data('src') +'"]', slider).not('.nivo-main-image').height();
			var sliceWidth = slider.width;
			slider.append(
				$('<div class="nivo-slice"><img src="'+ vars.currentImage.data('src') +'" style="position:absolute; width:'+ slider.width() +'px; height:auto; display:block !important; top:0; left:-'+ 'px;" /></div>').css({
					left:'0px',
					width:(slider.width())+'px',
					height:sliceHeight+'px',
					opacity:'0',
					overflow:'hidden'
				})
			);
            $('.nivo-slice', slider).height(sliceHeight);
            sliderImg.stop();
        };

        // Private run method
        var nivoRun = function(slider, kids, settings){
            // Слайдер не работает при ширине рабочей области менее 768 пикселей
            if(window.matchMedia("(max-width: 767px)").matches) { return false; }

            // Get our vars
            var vars = slider.data('nivo:vars');
            
            // Stop
            if(!vars || vars.stop) { return false; }

            // Set current background before change
            sliderImg.attr('src', vars.currentImage.data('src'));

            vars.currentSlide++;
            if(vars.currentSlide === vars.totalSlides) {
                vars.currentSlide = 0;
            }
            if(vars.currentSlide < 0) { vars.currentSlide = (vars.totalSlides - 1); }
            // Set vars.currentImage
            vars.currentImage = $(kids[vars.currentSlide]);

            // Remove any slices from last transition
            $('.nivo-slice', slider).remove();

            // Run 'fade' effect
            vars.running = true;
            var firstSlice = '';
            
            createSlices(slider, settings, vars);
            firstSlice = $('.nivo-slice:first', slider);
            firstSlice.css({
                'width': slider.width() + 'px'
            });
            firstSlice.animate({ opacity:'1.0' }, (settings.animSpeed * 2), '', function(){ slider.trigger('nivo:animFinished'); });
        };

        // Start / Stop
        this.stop = function(){
            if(!$(element).data('nivo:vars').stop){
                $(element).data('nivo:vars').stop = true;
            }
        };
        
        this.start = function(){
            if($(element).data('nivo:vars').stop){
                $(element).data('nivo:vars').stop = false;
            }
        };

        return this;
    };
        
    $.fn.nivoSlider = function(options) {
        return this.each(function(key, value){
            var element = $(this);
            // Return early if this element already has a plugin instance
            if (element.data('nivoslider')) { return element.data('nivoslider'); }
            // Pass options to plugin constructor
            var nivoslider = new NivoSlider(this, options);
            // Store plugin object in this element's data
            element.data('nivoslider', nivoslider);
        });
    };
    
    //Default settings
    $.fn.nivoSlider.defaults = {
        animSpeed: 500,
        pauseTime: 3000,
        startSlide: 0
    };
})(jQuery);
