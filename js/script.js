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

//Accordion function
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block"){
      panel.style.display = "none";
    } else {
      panel.style.display = "block";;
    }
  });
}