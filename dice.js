function play() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImage1 = "DiceImage/dice" + randomNumber1 + ".png";

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomDiceImage1);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImage2 = "DiceImage/dice" + randomNumber2 + ".png";

    var image2 = document.querySelectorAll("img")[1];

    image2.setAttribute("src", randomDiceImage2);

    if(randomNumber1 > randomNumber2){
        document.getElementById("screen").innerText = "Player1 wins! :)";
        console.log("Player 1 won the match");
    }
    else if(randomNumber1 < randomNumber2){
        document.getElementById("screen").innerText = ":) Player2 wins!";
        console.log("Player 2 won the match");
    }
    else {
        document.getElementById("screen").innerText = "Draw!";
        console.log("Draw");
    }
}


document.getElementById("press").addEventListener("click", play);