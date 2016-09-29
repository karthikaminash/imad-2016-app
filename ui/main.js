
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

var button = document.getElementById("counter");

button.onclick = function() {
   var request = new XMLHttpRequest();
   
   request.onsteadystatechange = function() {
       if (request.onsteadystatechange === XMLHttpRequest.DONE) {
           if (request.status === 200) {
               var counter = request.responseText;
             
              var span = document.getElementById("count");
              span.innerHTML = counter.toString();
           }
       }
   }; 
   request.open("GET", "http://karthikaminash.imad.hasura-app.imad.io/counter", true);
   request.dend(null);
   };
   
   
   