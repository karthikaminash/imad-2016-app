console.log('Loaded!');
var element = document.getElementById("main-text");

element.innerHTML = "Hello";

var img = document.getElementById("madi");
img.onClick = function() {
  img.style.marginleft = "100px";  
};
