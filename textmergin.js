var a = document.querySelector("textarea");
var b = document.querySelector("p");
var c = "";
a.addEventListener("keypress",function (e){
        var ch = e.key;
        c+=ch;
        b.innerHTML=c;
})