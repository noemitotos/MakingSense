//prints the numbers from 1 to 100. 
//for multiples of 3 print the word “Making” 
//for multiples of 5 print the word “Sense”. 
//for numbers which are multiples of both 3 and 5 print “Making Sense”.
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

//prints the numbers from 1 to 100. 
//for multiples of 3 print any other word instead of “Making” 
//for multiples of 5 print any other word instead of “Sense” 
//for multiples of 3 and 5 print both words 
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

