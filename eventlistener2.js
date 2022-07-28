var x = document.querySelector("h1");
var y = document.querySelector("img");
var h1text = x.innerHTML;
x.addEventListener("mouseover", function myfnc(){
    x.innerHTML = "";
    y.src = "one.jpg";
  // document.write("dfef");

});
x.addEventListener("mouseout",function myff(){
    // alert("hovered");
    y.src = "";
    x.innerHTML = h1text;
});
