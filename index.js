var numberofDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberofDrumButtons;i++ )
{document.querySelectorAll(".drum")[i].addEventListener('click',function(){
 var buttonInnerhtml=this.innerHTML;
 buttonAnimation(buttonInnerhtml);
  switch(buttonInnerhtml)
  {
   case "w":
   var tom1=new Audio("sounds/tom-1.mp3");
 tom1.play();
 break;
 case "a":
   var tom2=new Audio("sounds/tom-2.mp3");
 tom2.play();
 break;
  case "s":
   var tom3=new Audio("sounds/tom-3.mp3");
 tom3.play();
 break;
 case "d":
   var tom4=new Audio("sounds/tom-4.mp3");
 tom4.play();
 break;
  case "j":
   var tom5=new Audio("sounds/crash.mp3");
 tom5.play();
 break;
 case "k":
   var tom7=new Audio("sounds/kick-bass.mp3");
 tom7.play();
 break;

  case "l":
  
 var tom6=new Audio("sounds/snare.mp3");
 tom6.play();
 default: console.log(buttonInnerhtml);  

  }



});}

{document. addEventListener("keypress",function(event)
{
  buttonAnimation(event.key);
 switch(event.key)
  {
   case "w":
   var tom1=new Audio("sounds/tom-1.mp3");
 tom1.play();
 break;
 case "a":
   var tom2=new Audio("sounds/tom-2.mp3");
 tom2.play();
 break;
  case "s":
   var tom3=new Audio("sounds/tom-3.mp3");
 tom3.play();
 break;
 case "d":
   var tom4=new Audio("sounds/tom-4.mp3");
 tom4.play();
 break;
  case "j":
   var tom5=new Audio("sounds/crash.mp3");
 tom5.play();
 break;
 case "k":
   var tom7=new Audio("sounds/kick-bass.mp3");
 tom7.play();
 break;

  case "l":
  
 var tom6=new Audio("sounds/snare.mp3");
 tom6.play();
  

  }




})};
function buttonAnimation(currentkey)
{
 var activeButton = document.querySelector("."+currentkey);
 activeButton.classList.add("pressed");
 setTimeout(function()
 {activeButton.classList.remove("pressed");
},100);
}


 // var audio=new Audio("sounds/tom-1.mp3");
 // audio.play();