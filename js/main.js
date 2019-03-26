const input = document.getElementById("myInput");
const entries = document.getElementsByClassName("example-image-link");
input.addEventListener("keyup",function() {
   const val = input.value; 
    for (let i = 0; i < entries.length; i++) {
      const caption = entries[i].getAttribute("data-title"); 
      if (caption.toLowerCase().indexOf(val.toLowerCase()) != -1) {
        entries[i].style.display = "block";
      } else entries[i].style.display = "none";
    }
  },
  false
);