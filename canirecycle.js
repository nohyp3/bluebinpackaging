function search_grid() {
    let input = document.getElementById('search-bar').value
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


