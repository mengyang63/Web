var colors = [
    "rgb(0, 250, 250)", 
    "rgb(0, 0, 250)", 
    "rgb(0, 250, 0)", 
    "rgb(255, 0, 0)", 
    "rgb(255, 250, 0)", 
    "rgb(255, 0, 250)" 
]

function pickcolor() {
    var random =  Math.round(Math.random() * colors.length);
    return colors[random];
}

var squares = document.querySelectorAll(".square");
var pickedColor = pickcolor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
colorDisplay.textContent = pickedColor;


for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    // add click listeners
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            alert("correct!");
            message.textContent = "Correct!";
            changeColor(pickedColor);
        } else {
            alert("Wrong!!");
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again!";
        }
    })
}

function changeColor(color) {
    for (let i = 0;  i < squares.length ; i++) {
        squares[i].style.backgroundColor = color;
        
    } 
}