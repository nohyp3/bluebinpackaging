function search() {
    var input, filter, i, txtValue, box;
    input = document.getElementById('search-bar');
    filter = input.value.toUpperCase();
    box = document.getElementById("box");
    var text = document.getElementById("search-text")
  /*  for (i = 0; i < li.length; i++) {
        var items = ["box"]
        txtValue = items[i];
        if (true) {
          box.style.display = "";
        } else {
          box.style.display = "none";
        }
      }
    }
    */
   text.innerText = input.value + " lol i still don't work";
}


