
var itemList = ["Boxes", "Envelopes", "Poly-Mailers"];
var cityList= ["toronto", "vancouver", "ottawa"];
var currentItem = 0;
var currentItem2 = 0;

var item = document.getElementById("item");

setInterval(function() {
        item.innerHTML = itemList[currentItem];
        currentItem++;
    
        if(currentItem === itemList.length){ 
        currentItem = 0;
        }
    
}, 3000);


