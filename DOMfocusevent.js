var a = document.querySelector("input");
a.addEventListener("focus",function (){
 // console.log("focus");
  this.classList.add("b");
})

a.addEventListener("blur",function (e){
    //console.log("blur");
    var val = e.target.value.toUpperCase();
    console.log(val);
    a.value = val;
    this.classList.remove("b");
})

// a.addEventListener("focusin",function (){
//     console.log("focusin");
// })

// a.addEventListener("focusout",function (){
//     console.log("focusout"); 
// })

