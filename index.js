
var itemList = ["boxes", "envelopes", "poly-mailers"];
var cityList= ["toronto", "vancouver", "ottawa"];
var currentItem = 0;

var item = document.getElementById("item");

setInterval(function() {
        item.innerHTML = itemList[currentItem];
        currentItem++;
    
        if(currentItem === itemList.length){ 
        currentItem = 0;
        }
    
}, 3000);

