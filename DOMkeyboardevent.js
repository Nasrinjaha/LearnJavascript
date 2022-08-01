var a = document.querySelector("textarea");
a.addEventListener("keyup",function (e){
    if(e.shiftKey){
        console.log("shift + " + e.key);
    }
})
// a.addEventListener("keydown",function (){
//     console.log("keydown");
// })

// a.addEventListener("keypress",function (){
//     console.log("keypress");
// })