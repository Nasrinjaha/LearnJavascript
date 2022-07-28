var x = document.getElementById("hd");
var y = document.getElementsByTagName("h1")[1];
x.removeChild(y);
var z = document.createElement("h1");
var zz  = document.createTextNode("This is hedding1");
z.appendChild(zz);
var yy = document.getElementsByTagName("h1")[0];
x.insertBefore(z,yy);
