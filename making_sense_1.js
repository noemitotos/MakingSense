var ul = document.getElementById("makingsense-normal");
for (var i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0)
    msg = "Making Sense";
  else if (i % 3 === 0)
    msg = "Sense";
  else if (i % 5 === 0)
    msg = "Making";
  else
    msg = i;
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(msg));
  li.setAttribute("class", msg);
  ul.appendChild(li);
}

var ul = document.getElementById("makingsense-changed");
for (var i = 1; i <= 100; i++, msg = "") {
var words = ["Making","Sense"];
var nomaking = words.slice(1);
var nosense = words.slice(0,1);
  if (i % 5 === 0 && i % 3 === 0)
    msg = words.join(" ");
  else if (i % 3 === 0)
    msg = nomaking;
  else if (i % 5 === 0)
    msg = nosense;
  else
    msg = i;
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(msg));
  li.setAttribute("class", msg);
  ul.appendChild(li);
}

