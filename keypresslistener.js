var x= document.querySelectorAll("button"); //to access all same tag
var y = document.querySelector("h1");
var len = x.length;
for(var i=0;i<len;i++){
    x[i].addEventListener("click",function myfnc(){
        var text = this.innerText;
        this.classList.add("anim");
        y.innerHTML = text + " clicked"; 
    });
}
document.addEventListener("keypress",function fnc(event){
     var b = event.key;
     var bb = b.toUpperCase();
     b="."+b;
     var d = document.querySelector(b);
     d.classList.add("anim");
     y.innerHTML =   bb + " Button clicked";
     for(var i=0;i<x.length;i++){
        var text = x[i].innerText;
        if(text!=bb){
            x[i].classList.remove("anim");
        }
        
     }
    //  if(b=='a'){
    //     x[0].classList.add("anim");
    //     y.innerHTML =   "A Button clicked"; 
    //  }
    //  if(b=='b'){
    //     x[1].classList.add("anim");
    //     y.innerHTML =   "B Button clicked"; 
    //  }
    //  if(b=='c'){
    //     x[2].classList.add("anim");
    //     y.innerHTML =   "C Button clicked"; 
    //  }
    
    
});

