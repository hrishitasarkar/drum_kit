var noofbuttons=document.querySelectorAll(".drum").length;
for(var i=0;i<noofbuttons;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttoninnerhtml=this.innerHTML;
    makeSound(buttoninnerhtml);
    buttonAnimation(buttoninnerhtml);
});

document.addEventListener("keydown",function(event){
    makeSound(event);
    buttonAnimation(event);
});

function makeSound(key){
  switch (key) {
    case "w":
        var tom1=new Audio("tom-1.mp3");
        tom1.play();
        break;

            case "a":
                var tom1=new Audio("tom-2.mp3");
                tom1.play();
                break;

                case "s":
                    var tom1=new Audio("tom-3.mp3");
                    tom1.play();
                    break;

                    case "d":
                        var tom1=new Audio("tom-4.mp3");
                        tom1.play();
                        break;

                        case "j":
                            var tom1=new Audio("snare.mp3");
                            tom1.play();
                            break;


                            case "k":
                                var tom1=new Audio("kick-bass.mp3");
                                tom1.play();
                                break;

                                case "l":
                                    var tom1=new Audio("crash.mp3");
                                    tom1.play();
                                    break;

    default:console.log(buttoninnerhtml);
    break;
  }}

  function buttonAnimation(currentkey){
    var activebutton=document.querySelector("."+currentkey);
    activebutton.classList.add("pressed");

    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },1000);
  }

}