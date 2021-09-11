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