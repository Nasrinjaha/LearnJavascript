var x = document.getElementById("hd");
function  button3(){
    var z = document.createElement("h1");
    var zz  = document.createTextNode("This is hedding1");
    z.appendChild(zz);
    x.appendChild(z);
}
function button4(){
   var y = x.getElementsByTagName('h1').length;
   var yy = x.getElementsByTagName("h1")[y-1];
   x.removeChild(yy);
}
