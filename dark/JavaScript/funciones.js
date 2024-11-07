function funcion1(a,b,c) {
    var dots = a;
    var moreText = b;
    var btnText = c;
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Leer Más"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Leer Menos"; 
      moreText.style.display = "inline";
    }
}

function openModal() {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("barraNavega").style.display = "none";
  document.getElementById("carro").style.display = "none";
  document.getElementById("mostrar").style.display = "none";
  document.getElementById("final").style.display = "none";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.getElementById("barraNavega").style.display = "block";
  document.getElementById("carro").style.display = "block";
  document.getElementById("mostrar").style.display = "block";
  document.getElementById("final").style.display = "block";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}