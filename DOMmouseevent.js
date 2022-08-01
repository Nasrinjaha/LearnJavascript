var a = document.querySelector("div");
var arr = ["red","blue","green","yellow","orange"];
console.clear();
var indx = 0;
var len = arr.length;
//  a.addEventListener("click",function (e){
//       //console.log(e.target.className);
//        indx = indx+1;
//        if(indx>=len){
//          indx = 0;
//        }
//        a.style.backgroundColor = arr[indx];
//        a.innerHTML = "this is " + arr[indx];
       
//       //console.log("clicked");  
//  })

 var b = document.querySelectorAll("button");
 Array.from(b).map((button)=>{
    button.addEventListener("click",function (e){
          var c = e.target.innerText;
          a.style.backgroundColor = c;
    })
 })

// a.addEventListener("dblclick",function (){
//     console.log("dblclicked");  
    
// })
// a.addEventListener("mouseup",function (){
//     console.log("mouseup");  
    
// })

// a.addEventListener("mousedown",function (){
//     console.log("mousedown");  
    
// })
// a.addEventListener("mouseenter",function (){
//     console.log("mouseenter");  
    
// })
// a.addEventListener("mouseleave",function (){
//     console.log("mouseleave");  
    
// })

// a.addEventListener("mouseover",function (){
//     console.log("mouseover");  
    
// })

// a.addEventListener("mouseout",function (){
//     console.log("mouseout");  
    
// })

// a.addEventListener("mousemove",function (e){
//     //    var x =  e.clientX;
//     //    var y = e.clientY;
//     // var x = e.offsetX;
//     // var y = e.offsetY;
//        a.innerHTML = x + " " + y;
//     //    console.log(x);
//     //    console.log(y);
// })