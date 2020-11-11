//Slideshow
var slides = 0;
var images = []

images[0] = 'images/talk.png';
images[1] = 'images/world.png';

function slideshow(){
	document.getElementById('slide').src = images[slides];
	if (slides < images.length - 1){
		slides++;
    }else {
		slides = 0;
    }
	setTimeout("slideshow()", 3000);
}
window.onload = slideshow;