console.log('Loaded!');
//code to change the main-text div

var element=document.getElementById('main-text');
element.innerHTML='photo removed...:P';

//code to move the image
var img=document.getElementById('madi');
img.onclick=function(){
    img.style.marginLeft='100px';
};