var photos = ["one.jpg","two.jpg","three.png","four.png"];
var imgtag = document.querySelector("img");
var img = 0;
var l = photos.length;
function previousimage(){
    img--;
    if(img==-1){
        img = l-1;
    }
    imgtag.src=photos[img];
}
function nextimage(){
    img = img+1;
    if(img==l){
        img = 0;
       
    }
    imgtag.src=photos[img];
  
}