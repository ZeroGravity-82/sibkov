$(document).ready(function() {
	$('#video-gallery').lightGallery({
		selector: '.album-item',
		getCaptionFromTitleOrAlt: false,
		youtubePlayerParams: {
			modestbranding: 1,
			showinfo: 0,
			rel: 0,
			controls: 1
		}
	}); 
});