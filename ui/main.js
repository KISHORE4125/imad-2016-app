console.log('Loaded!');
//MOVE THE IMAGE

var img=document.getElementByID('madi');
var marginLeft=0;
function movRight(){
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft+ 'px';
    }
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};