var drum_buttons = document.querySelectorAll(".drum").length;

var i=0;
while (i < drum_buttons) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        Sound(this.innerHTML);
        Animate(this.innerHTML);
    });
    i++;
}

document.addEventListener("keydown", function(event) {
    Sound(event.key);
    Animate(event.key);
})

function Animate(current_key) {
    var active_button = document.querySelector("." + current_key);
    active_button.classList.add("pressed");

    setTimeout(function() {
        active_button.classList.remove("pressed");
    }, 100);
}

function Sound(key) {
    switch (key) {
        case "a":
            var tom1 = new Audio("assets/sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "b":
            var tom2 = new Audio("assets/sounds/tom-2.mp3");
            tom2.play();
            break;

        case "c":
            var tom2 = new Audio("assets/sounds/tom-3.mp3");
            tom2.play();
            break;

        case "d":
            var tom2 = new Audio("assets/sounds/tom-4.mp3");
            tom2.play();
            break;
        
        case "e":
            var tom2 = new Audio("assets/sounds/snare.mp3");
            tom2.play();
            break;
            
        case "f":
            var tom2 = new Audio("assets/sounds/crash.mp3");
            tom2.play();
            break;

        case "g":
            var tom2 = new Audio("assets/sounds/kick-bass.mp3");
            tom2.play();
            break;

        case "h":
            var tom2 = new Audio("assets/sounds/kick-bass.mp3");
            tom2.play();
            break;

        case "i":
            var tom2 = new Audio("assets/sounds/crash.mp3");
            tom2.play();
            break;

        default:
            alert("bhsodike a se i mein koi character daba")
    }
}