function search() {
    var input, filter, box, envelope, mailer, bubble;
    input = document.getElementById('search-bar');
    filter = input.value.toUpperCase();
    box = document.getElementById("box");
    envelope = document.getElementById("envelope");
    mailer = document.getElementById("mailer");
    bubble = document.getElementById("bubble");
    var text = document.getElementById("search-text");
    var items = ["BOX", "KRAFT ENVELOPE", "POLYMAILER", "BUBBLE WRAP", ""];
    if(filter == items[0]) {
      box.style.display = "";
      envelope.style.display = "none";
      mailer.style.display = "none";
      bubble.style.display = "none";
      text.innerText = "";
    }
    else if(filter == items[1]) {
      box.style.display = "none";
      envelope.style.display = "";
      mailer.style.display = "none";
      bubble.style.display = "none";
      text.innerText = "";
    }
    else if(filter == items[2]) {
      box.style.display = "none";
      envelope.style.display = "none";
      mailer.style.display = "";
      bubble.style.display = "none";
      text.innerText = "";
    }
    else if(filter == items[3]) {
      box.style.display = "none";
      envelope.style.display = "none";
      mailer.style.display = "none";
      bubble.style.display = "";
      text.innerText = "";
    }
    else if(filter == items[4]) {
      box.style.display = "";
      envelope.style.display = "";
      mailer.style.display = "";
      bubble.style.display = "";
      text.innerText = "";
    }
    else {
      text.innerText = "not found";
    }
  }
  


