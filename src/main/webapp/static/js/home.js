if (localStorage.getItem("id") == null){
    localStorage.setItem("id","");
    localStorage.setItem("username","");
}
if (localStorage.getItem("id") != ""){
    window.location = 'http://127.0.0.1:8090/afterlogin'
}
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}
function move() {
    plusDivs(1);
}
setInterval(move,5000);
