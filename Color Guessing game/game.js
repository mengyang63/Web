var colors = [
    "rgb(0, 250, 250)", 
    "rgb(0, 0, 250)", 
    "rgb(0, 250, 0)", 
    "rgb(255, 0, 0)", 
    "rgb(255, 250, 0)", 
    "rgb(255, 0, 250)" 
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;


for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    // add click listeners
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            alert("correct!");
        } else {
            alert("Wrong!!");
        }
    })
}