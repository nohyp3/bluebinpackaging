
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

/*
var location = document.getElementById("location");

setInterval(function() {
        location.innerHTML = cityList[currentItem2];
        currentItem2++;
    
        if(currentItem2 === cityList.length){ 
        currentItem2 = 0;
        }
    
}, 4000);
*/
