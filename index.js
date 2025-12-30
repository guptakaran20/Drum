const button = document.querySelectorAll(".drum")
button.forEach((btn) => {
    btn.addEventListener("click", function (e) {
    const sound = this.innerHTML;
     makeSound(sound);
     buttonAnimation(sound);
    });
});
document.addEventListener("keydown", function (e) {
     makeSound(e.key);
     buttonAnimation(e.key);
});

function makeSound(key){
    if(key==="w"){
        const audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    else if(key==="a"){
        const audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    else if(key==="s"){
        const audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    else if(key==="d"){
        const audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }
    else if(key==="k"){
        const audio = new Audio("sounds/crash.mp3");
        audio.play();
    }
    else if(key==="l"){
        const audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
    else if(key==="j"){
        const audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
}

function buttonAnimation(currentKey){
    const activeButton = document.querySelector("."+ currentKey);
    if (!activeButton) return;
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}
