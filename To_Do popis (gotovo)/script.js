function enterKlik(e)
{
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById('dodaj_gumb').click();
        return false;
    }
    return true;
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function dodajGumb() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("unos").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Moraš napisati nešto!");
  } else {
    document.getElementById("popis_taskova").appendChild(li);
  }
  document.getElementById("unos").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}