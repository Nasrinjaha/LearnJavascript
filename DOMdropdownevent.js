var d  = document.querySelector("select[name=department]");
d.addEventListener("change",function myfnc(e){
       console.clear();
       console.log(e.target.value);
})
