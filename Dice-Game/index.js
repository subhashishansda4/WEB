var random_number_1 = Math.floor(Math.random() * 6) + 1;
var random_number_2 = Math.floor(Math.random() * 6) + 1;

var random_dice_1 = "assets/dice" + random_number_1 + ".png";
var random_dice_2 = "assets/dice" + random_number_2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", random_dice_1);
document.querySelectorAll("img")[1].setAttribute("src", random_dice_2);

if (random_number_1 > random_number_2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (random_number_1 < random_number_2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}