console.log('Loaded!');
//code to change the main-text div

var element=document.getElementById('main-text');
element.innerHTML='text changed...:P';

//code to move the image
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft + 1;//increase margin by 1 pixel
    img.style.marginLeft = marginLeft + 'px';//concatenate 10 by px as both are strings
}

img.onclick=function(){
    var interval = setInterval(moveRight,50);//move to right in every 50 ms
   // img.style.marginLeft='100px';
};