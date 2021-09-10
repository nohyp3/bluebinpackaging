var searchBar = document.getElementById('search-bar');
function search_grid() {
    let input = document.getElementById('search-bar').value;
    input=input.toLowerCase();
    let x = document.getElementsByClassName('grid-item');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="";
        }
    }
}
//menu button
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


