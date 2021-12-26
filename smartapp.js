

const masivPicture=['https://cdn-icons-png.flaticon.com/512/54/54966.png','https://cdn-icons-png.flaticon.com/512/687/687259.png','https://cdn-icons-png.flaticon.com/512/13/13600.png','https://cdn-icons-png.flaticon.com/512/345/345535.png','https://www.nicepng.com/png/full/301-3014371_png-file-icon-umbrella.png'];
const arriveNumber=['#firstF','#secondF','#thirdF','#fourthF','#fifthF'];



	for (let i = 0; i <5; i++) {
	let changeImg = document.querySelector('#changeImg')
	document.querySelector(arriveNumber[i]).addEventListener('mouseover',()=>{
	document.querySelector('#listFeatures_content_heading').style.display = 'block' 
	document.querySelector('#listFeatures_content_text').style.display = 'block' 
	changeImg.setAttribute('src',masivPicture[i])
	changeImg.style.display = 'block';
	})
}


var slideIndex = 1;
showSlides(slideIndex);

function changeSlides(x) {
	showSlides(slideIndex += x)
}

function showSlides(x) {
	var i;
	var slides = document.getElementsByClassName('slidePage')
	if (x > slides.length) {slideIndex=1}
	if (x < 1) {slideIndex=slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "flex"

}