
let icon=document.getElementById("icon1");
let narve=document.getElementById("narve1");
icon.addEventListener("click",clickme);
function clickme(){
  
   if(narve.style.display=="none"){
    narve.style.display="block"
   }else{
    narve.style.display="none"
   }
}
let logo=document.getElementById("logo");
logo.addEventListener("click",log)
function log(){
   clickme().remove()
}

window.addEventListener("load",loadimg);
function loadimg(){
let setall=setInterval(side,4000)

}


let count=1;
let countlimit=4000;

function side(){
  if(count===1){
    document.getElementById("img1").style.opacity="1px";

    setTimeout(counting,4000)
function counting(){
    document.getElementById("img1").style.right="0px";
    document.getElementById("img1").style.zIndex="1000px";

      document.getElementById("img2").style.right="-1200px";
    document.getElementById("img2").style.zIndex="1500px";

document.getElementById("img3").style.right="1200px";
document.getElementById("img3").style.zIndex="500px";
}
count=2;
document.getElementById("img1").style.opacity="0px";
  }

    else if(count===2){
    document.getElementById("img2").style.opacity="1px";

    setTimeout(counting,4000)
function counting(){
      document.getElementById("img2").style.right="0px";
     document.getElementById("img2").style.zIndex="1000px";

       document.getElementById("img1").style.right="-1200px";
     document.getElementById("img1").style.zIndex="1500px";

            document.getElementById("img3").style.right="1200px";
     document.getElementById("img3").style.zIndex="500px";
}
count=3;
document.getElementById("img1").style.opacity="1px";
  }

    else if(count===3){
    document.getElementById("img3").style.opacity="0px";

    setTimeout(counting,4000)
function counting(){
      document.getElementById("img2").style.right="0px";
     document.getElementById("img2").style.zIndex="1000px";

       document.getElementById("img3").style.right="-1200px";
     document.getElementById("img3").style.zIndex="1500px";

            document.getElementById("img1").style.right="1200px";
     document.getElementById("img1").style.zIndex="500px";
}
count=1;
document.getElementById("img3").style.opacity="0px";
  }
}

let countme=document.getElementById("countme");
window.addEventListener("load",allload)
let count1=0 ;
let seinter=setInterval(allload,100)
function allload(){
countme.innerHTML=count1+"%";
count1++;
if(count1===99){

  clearInterval(seinter)
}
}
let images=["imgs/IMG_9465.JPG","imgs/IMG_9460.JPG","imgs/IMG_9459.JPG","imgs/IMG_9458.JPG","imgs/IMG_9457.JPG","imgs/IMG_9171.JPG","imgs/IMG_9170.JPG","imgs/IMG_9169.JPG","imgs/IMG_9463.JPG","imgs/IMG_9464.JPG","imgs/IMG_9468.JPG","imgs/IMG_9466.JPG"];
let i=0;
function slideshow(){
  document.getElementById("allimage").src=images[i]
  if(i<images.length-1){
    i++
  }else{
    i=0
  }
  setTimeout("slideshow()",2000)
}
window.onload=slideshow;

