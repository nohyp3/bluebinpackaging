
var itemList = ["Boxes", "Envelopes", "Poly-Mailers"];
var cityList= ["toronto", "vancouver", "ottawa"];
var imageList = ["/images/box.svg", "/images/kraftenvelope.svg", "/images/polymailer.svg"];
var currentItem = 0;
var currentItem2 = 0;

var item = document.getElementById("item");

setInterval(function() {
        item.innerHTML = itemList[currentItem];
        document.getElementById("hero-image").src = imageList[currentItem];

        currentItem++;
    
        if(currentItem === itemList.length){ 
        currentItem = 0;
        }
    
}, 3000);


