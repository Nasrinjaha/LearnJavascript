var x= document.querySelectorAll("button"); //to access all same tag
var y = document.querySelector("h1");
var len = x.length;
var flags = new Map([
   ["button1",0],["button2",0],["button3",0]  
]);
for(var i=0;i<len;i++){
    x[i].addEventListener("click",function myfnc(){
        var text = this.innerText;
        if(flags.get(text)==0){
            this.classList.add("anim");
            y.innerHTML = text + " clicked";
            flags.set(text,1);
            if(text=='button1'){
                x[1].classList.remove("anim");
                flags.set("button2",0);
                x[2].classList.remove("anim");
                flags.set("button3",0);
            }
            else if(text=='button2'){
                x[0].classList.remove("anim");
                flags.set("button1",0);
                x[2].classList.remove("anim");
                flags.set("button3",0);
            }
            else{
                x[1].classList.remove("anim");
                flags.set("button2",0);
                x[0].classList.remove("anim");
                flags.set("button1",0);
            }
        }
        else{
            this.classList.remove("anim");
            flags.set(text,0);
            if(flags.get("button1")==0 && flags.get("button2")==0 && flags.get("button3")==0 ){
                y.innerHTML = " No button Clicked";
            }
        }
    });
    
}

