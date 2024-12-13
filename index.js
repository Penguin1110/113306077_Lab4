// Detecting button clicks
document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", function() {
        const buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
});

// Detecting keyboard presses
document.addEventListener("keydown", function(event) {
    playSound(event.key);
    buttonAnimation(event.key);
});

// Function to play sound
function playSound(key) {
    switch (key) {
        case "w":
            new Audio("sounds/crash.mp3").play();
            break;
        case "a":
            new Audio("sounds/kick.mp3").play();
            break;
        case "s":
            new Audio("sounds/snare.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom1.mp3").play();
            break;
        case "j":
            new Audio("sounds/tom2.mp3").play();
            break;
        case "k":
            new Audio("sounds/tom3.mp3").play();
            break;
        case "l":
            new Audio("sounds/tom4.mp3").play();
            break;
        default:
            console.log("Invalid key pressed:", key);
    }
}

// Function to add animation
function buttonAnimation(currentKey) {
    const activeButton = document.querySelector(`.${currentKey}`);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(() => activeButton.classList.remove("pressed"), 100);
    }
}
