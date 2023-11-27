window.onscroll = function(){
    if(document.documentElement.scrollTop > 1400){
        document.getElementById("width1").style.width= "29rem"
        document.getElementById("width2").style.width= "27rem"
        document.getElementById("width3").style.width= "25rem"
        document.getElementById("width4").style.width= "26rem"
        document.getElementById("width5").style.width= "28rem"
        document.getElementById("width6").style.width= "26rem"
        document.getElementById("width7").style.width= "27rem"
        document.getElementById("width8").style.width= "29rem"
        document.getElementById("width9").style.width= "28rem"
        document.getElementById("width10").style.width= "27rem"



    }
    else{
        document.getElementById("width1").style.width = "0rem"
        document.getElementById("width2").style.width = "0rem"
        document.getElementById("width3").style.width = "0rem"
        document.getElementById("width4").style.width = "0rem"
        document.getElementById("width5").style.width = "0rem"
        document.getElementById("width6").style.width = "0rem"
        document.getElementById("width7").style.width = "0rem"
        document.getElementById("width8").style.width = "0rem"
        document.getElementById("width9").style.width = "0rem"
        document.getElementById("width10").style.width = "0rem"

    }
}


let menuBar =document.getElementById("menuBar")
let navId = document.getElementById("navId")
// function toggleHide (){
//     if(navId.style.visibility){
//         navId.style.visibility = "hidden"
//     }
//     else{
//         navId.style.visibility = "visible"

//     }
// }

menuBar.addEventListener('click', function run(){
    if(navId.style.display != 'block'){
        navId.style.display ='block'
          }
    else{
        navId.style.display='none'
    }
})













let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
