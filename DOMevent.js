// var b = document.querySelector("input[name=email]");
//  b.addEventListener("change",function changehandler(e){
//     // console.log(e);
//    // console.log(e.target);
//    //console.log(e.target.className);
//    console.log(e.target.value);
//  })

var programs = document.querySelectorAll("input[name=program]");
//console.log(a);
Array.from(programs).map((program) => {
    program.addEventListener("change",function programHandler(e){
        if(e.target.checked){
            console.log(e.target.value);
        }
        
    });
});