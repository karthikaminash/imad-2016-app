console.log('Loaded!');
var element = document.getElementById("main-text");

element.innerHTML = "Hello";

var img = document.getElementById("madi");
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + "px" ;
    marginLeft = 100;
}

img.onclick = function() {
    var interval = setInterval(moveRight, 10);
  
};
