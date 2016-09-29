console.log('Loaded!');
var element = document.getElementById("main-text");

element.innerHTML = "Hello";

var img = document.getElementById("madi");
var marginLeft = 50;
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + "px" ;
    
}

img.onclick = function() {
    var interval = setInterval(moveRight, 100);
  
};
