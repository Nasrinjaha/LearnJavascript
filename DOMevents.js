// window.addEventListener("load", function (){
//     console.log("load");
// })
// window.addEventListener("unload", function (){
//     console.log("unload");
// })
// window.addEventListener("scroll", function (){
//     console.log("scroll");
// })
var z = document.querySelector("h1");
// window.addEventListener("resize", function (){
//     const w = window.outerWidth;
//     const h = window.outerHeight;
//     z.innerHTML= w + " " + h;

//     console.log("resize");
// })

var x = document.querySelector("details");
var y = document.querySelector("p");
var cnt = 0;
x.addEventListener("toggle",function (e){
   if(e.target.open){
     cnt++;
     z.innerHTML = "toggle opened";
     y.innerHTML = "toggle "+cnt;
   }
   else{
    z.innerHTML = "toggle closed";  
   }
   console.log("toggle");
})

