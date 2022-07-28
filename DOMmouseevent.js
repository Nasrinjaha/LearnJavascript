var a = document.querySelector("div");
console.clear();
 a.addEventListener("click",function (){
      console.log("clicked");  
 })

a.addEventListener("dblclick",function (){
    console.log("dblclicked");  
    
})
a.addEventListener("mouseup",function (){
    console.log("mouseup");  
    
})

a.addEventListener("mousedown",function (){
    console.log("mousedown");  
    
})
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

a.addEventListener("mousemove",function (e){
    //    var x =  e.clientX;
    //    var y = e.clientY;
    var x = e.offsetX;
    var y = e.offsetY;
       a.innerHTML = x + " " + y;
    //    console.log(x);
    //    console.log(y);
})