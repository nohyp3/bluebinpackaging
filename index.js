
var itemList = ["Boxes", "Envelopes", "Poly-Mailers"];
var imageList = ["/images/box.svg", "/images/kraftenvelope.svg", "/images/polymailer.svg"];
var currentItem = 0;

var item = document.getElementById("item");

setInterval(function() {
        item.innerHTML = itemList[currentItem];
        document.getElementById("hero-image").src = imageList[currentItem];

        currentItem++;
    
        if(currentItem === itemList.length){ 
        currentItem = 0;
        }
    
}, 3000);

//menu buttom
var menu = document.getElementById('menu');
var links = document.getElementById('mobile-links');
var menuOnOff = 0;
menu.addEventListener('click', () => {
    menu.style.display = "none";
    if( menuOnOff == 0) {
        links.style.setProperty('display', 'flex');
        menuOnOff = 1;
    }
    else {
        links.style.setProperty('display', 'none');
        menuOnOff = 0;
    }
})
