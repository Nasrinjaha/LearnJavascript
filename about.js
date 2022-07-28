var x = document.querySelector("img");
function button1(){
    //alert('button1');
    x.src = "usermale.png";
    var z = document.getElementById("aa");
    for(var i = 0;i<3;i++){
        var hedding = document.createElement("h1");
        var text = document.createTextNode("this is hedding male");
        hedding.appendChild(text);
        z.appendChild(hedding);
    
   }
}
function button2(){
    //alert('button2');
   x.src = "userfemale.png";
   var z = document.getElementById("bb");
   for(var i=0;i<5;i++){
      var input = document.createElement("input");
      // var text = document.createTextNode("this is hedding female");
      // hedding.appendChild(text);
       //var x = document.createElement("br");
      z.appendChild(input);
     // z.appendChild(x);

 
   }
}
var y = document.querySelector("a");
y.innerHTML = "This is link";
y.style.textDecoration = "none";
y.style.color = "black";
y.style.fontSize = "2rem";
y.href = "https://www.geeksforgeeks.org/";
