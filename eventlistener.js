var x = document.querySelector("button");
x.addEventListener("click",function myfunc() {
    alert("buttonClicked");
});
var y = document.querySelector("h1");
var z  = document.querySelector("img");
y.addEventListener("mouseover",function myf(){
     // alert("hovered");
     y.classList.add("h");
     z.src = "one.jpg";
});
y.addEventListener("mouseout",function myff(){
    // alert("hovered");
    y.classList.remove("h");
    z.src = "";
});
